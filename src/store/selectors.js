import { EMPTY_COUNT } from '../constants/constants'
import { BOOKS } from '../constants/books'

export function selectHasItemsInBasket(state) {
    const booksAddedToBasket = BOOKS.filter(
        (book) => state.items[book.id] !== undefined
    )
    return booksAddedToBasket.length > EMPTY_COUNT
}
export function selectIsBookAddedToBasket(bookId) {
    return (state) => state.items[bookId]
}
export function selectBookQuantity(bookId) {
    return (state) => state.items[bookId]
}