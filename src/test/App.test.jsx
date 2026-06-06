import { render, screen } from '@testing-library/react'
import App from '../App.jsx'
import * as CONSTANTS from '../constants/testingConstants.js'

describe('Book Store', () => {
    beforeEach(() => {
        render(<App />)
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
})