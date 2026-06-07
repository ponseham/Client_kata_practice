import { render, screen } from '@testing-library/react'
import { createStore, combineReducers } from 'redux'
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
    test("Add books to basket and show basket items", async () => {
        const addBookToBasket = [0, 1, 2]
        await addGivenBooksToBasket(addBookToBasket)
        const basketItems = screen.getAllByTestId(CONSTANTS.TEST_ID_BASKET_ITEM)
        expect(basketItems).toHaveLength(addBookToBasket.length)
        addBookToBasket.forEach(book => {
            expect(screen.getAllByText(CONSTANTS.BOOKS[book].title).length).toBe(CONSTANTS.EXPECTED_BOOK_TITLE_DISPLAYED)
        })
    })
    test("Remove a copy of book from basket", async () => {
        const addBookToBasket = [1, 2]
        await addGivenBooksToBasket(addBookToBasket)
        expect(screen.getAllByText(CONSTANTS.ADD_ONE_MORE_PREFIX)).toHaveLength(addBookToBasket.length)
        expect(screen.getAllByText(CONSTANTS.REMOVE_SINGLE_BOOK_BUTTON_LABEL)).toHaveLength(addBookToBasket.length)
        const removeSingleButton = screen.getAllByText(CONSTANTS.REMOVE_SINGLE_BOOK_BUTTON_LABEL)
        expect(removeSingleButton[0]).toHaveAttribute(
            'aria-label',
            CONSTANTS.REMOVE_SINGLE_BOOK_FROM_BASKET_ARIA_LABEL.replace('_', CONSTANTS.BOOKS[1].title)
        )
        await userEvent.click(removeSingleButton[0])
        expect(screen.getAllByText(CONSTANTS.BOOKS[1].title).length).toBe(CONSTANTS.EXPECTED_BOOK_TITLE_DISPLAYED_AFTER_REMOVE)
        expect(screen.getAllByTestId(CONSTANTS.TEST_ID_BASKET_ITEM)).toHaveLength(addBookToBasket.length - 1)
    })
})