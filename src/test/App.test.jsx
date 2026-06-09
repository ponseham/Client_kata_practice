import { render, screen } from '@testing-library/react'
import { createStore } from 'redux'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import App from '../App.jsx'
import * as CONSTANTS from '../constants/testingConstants.js'
import basketReducer from '../store/reducer.js'

async function addGivenBooksToBasket(bookIndex = []) {
    const buttons = screen.getAllByText(CONSTANTS.ADD_BUTTON_LABEL)
    for (const button of bookIndex) {
        await userEvent.click(buttons[button])
    }
}

describe('Book Store', () => {
    beforeEach(() => {
        const store = createStore(basketReducer)
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )
    })
    test('Show book store header', () => {
        expect(screen.getByText(CONSTANTS.STORE_HEADER_TITLE)).toBeInTheDocument()
    })
    test('Show books information as card', () => {
        CONSTANTS.BOOKS.forEach(book => {
            const image = screen.getByAltText(book.title)
            expect(image.src).toContain('/images')
            expect(image).toBeInTheDocument()
            expect(image).toHaveAttribute('src', book.coverUrl)
            expect(screen.getByText(book.title)).toBeInTheDocument()
            expect(screen.getAllByText(book.author)).toHaveLength(CONSTANTS.BOOKS_BY_SAME_AUTHOR[book.author])
        })
        const prices = screen.getAllByText(`${CONSTANTS.BOOK_PRICE} ${CONSTANTS.CURRENCY_LABEL}`)
        expect(prices).toHaveLength(CONSTANTS.BOOKS.length)
    })
    test('Show discount related details in footer', () => {
        expect(screen.getByText(CONSTANTS.MIX_AND_SAVE_TEXT)).toBeInTheDocument()
        expect(screen.getByText(CONSTANTS.DISCOUNT_INFO_TEXT)).toBeInTheDocument()
    })
    test('Show basket is empty at the start', () => {
        expect(screen.getByText(CONSTANTS.BASKET_SECTION_TITLE)).toBeInTheDocument()
        expect(screen.getByText(CONSTANTS.BASKET_EMPTY_MESSAGE)).toBeInTheDocument()
    })
    test("Show Add book to basket for all books", () => {
        const buttons = screen.getAllByText(CONSTANTS.ADD_BUTTON_LABEL)
        expect(buttons.length).toBe(CONSTANTS.BOOKS.length)
        CONSTANTS.BOOKS.forEach((book, index) => {
            expect(buttons[index]).toHaveAttribute(
                'aria-label',
                CONSTANTS.ADD_TO_BASKET_ARIA_LABEL.replace('_', book.title)
            )
        })
    })
    test("When add books to basket show basket items with corresponding book titles", async () => {
        const addBookToBasket = [0, 1, 2]
        await addGivenBooksToBasket(addBookToBasket)
        const basketItems = screen.getAllByTestId(CONSTANTS.TEST_ID_BASKET_ITEM)
        expect(basketItems).toHaveLength(addBookToBasket.length)
        addBookToBasket.forEach(book => {
            expect(screen.getAllByText(CONSTANTS.BOOKS[book].title).length).toBe(CONSTANTS.EXPECTED_BOOK_TITLE_DISPLAY_COUNT)
        })
    })
    test("When remove a book delete the book from basket and display remaining basket items", async () => {
        const addBookToBasket = [1, 2]
        await addGivenBooksToBasket(addBookToBasket)
        const removeButton = screen.getAllByText(CONSTANTS.REMOVE_BUTTON_LABEL)
        expect(removeButton[0]).toBeInTheDocument()
        expect(removeButton[0]).toHaveAttribute(
            'aria-label',
            CONSTANTS.REMOVE_BUTTON_ARIA_LABEL.replace('_', CONSTANTS.BOOKS[1].title)
        )
        await userEvent.click(removeButton[0])
        expect(screen.getAllByText(CONSTANTS.BOOKS[1].title).length).toBe(CONSTANTS.EXPECTED_BOOK_TITLE_DISPLAY_COUNT_AFTER_REMOVE_BOOK)
        expect(screen.getAllByText(CONSTANTS.BOOKS[2].title).length).toBe(CONSTANTS.EXPECTED_BOOK_TITLE_DISPLAY_COUNT)
    })
    test("Display empty basket message when all basket items are cleared", async () => {
        await addGivenBooksToBasket([0, 1])
        const clearButton = screen.getByText(CONSTANTS.CLEAR_BUTTON_LABEL)
        expect(clearButton).toBeInTheDocument()
        expect(clearButton).toHaveAttribute(
            'aria-label',
            CONSTANTS.CLEAR_BASKET_ARIA_LABEL
        )
        await userEvent.click(clearButton)
        expect(screen.getByText(CONSTANTS.BASKET_EMPTY_MESSAGE)).toBeInTheDocument()
    })
    test("Show price without any discount when adding single book", async () => {
        await addGivenBooksToBasket([2])
        expect(screen.getByText(CONSTANTS.TOTAL_LABEL)).toBeInTheDocument()
        expect(screen.getByTestId(CONSTANTS.TEST_ID_TOTAL)).toHaveTextContent(CONSTANTS.ONE_BOOK_PRICE_WITHOUT_DISCOUNT_AMOUNT)
        expect(screen.queryByText(CONSTANTS.SUBTOTAL_LABEL)).not.toBeInTheDocument()
        expect(screen.queryByText(CONSTANTS.DISCOUNT_LABEL)).not.toBeInTheDocument()
    })
    test("Show price with discount when adding two books", async () => {
        await addGivenBooksToBasket([2, 3])
        expect(screen.getByText(CONSTANTS.SUBTOTAL_LABEL)).toBeInTheDocument()
        expect(screen.getByText(CONSTANTS.DISCOUNT_LABEL)).toBeInTheDocument()
        expect(screen.getByTestId(CONSTANTS.TEST_ID_TOTAL)).toHaveTextContent(CONSTANTS.TWO_BOOK_WITH_DISCOUNT_TOTAL)
        expect(screen.getByTestId(CONSTANTS.TEST_ID_SUBTOTAL)).toHaveTextContent(CONSTANTS.TWO_BOOK_WITH_DISCOUNT_SUBTOTAL)
        expect(screen.getByTestId(CONSTANTS.TEST_ID_DISCOUNT)).toHaveTextContent(CONSTANTS.TWO_BOOK_WITH_DISCOUNT_DISCOUNT)
    })
    test("Show price with discount when adding three books", async () => {
        await addGivenBooksToBasket([2, 3, 4])
        expect(screen.getByTestId(CONSTANTS.TEST_ID_TOTAL)).toHaveTextContent(CONSTANTS.THREE_BOOK_WITH_DISCOUNT_TOTAL)
        expect(screen.getByTestId(CONSTANTS.TEST_ID_SUBTOTAL)).toHaveTextContent(CONSTANTS.THREE_BOOK_WITH_DISCOUNT_SUBTOTAL)
        expect(screen.getByTestId(CONSTANTS.TEST_ID_DISCOUNT)).toHaveTextContent(CONSTANTS.THREE_BOOK_WITH_DISCOUNT_DISCOUNT)
    })
})