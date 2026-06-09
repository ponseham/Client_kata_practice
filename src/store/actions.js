const ACTION_TYPES = {
    ADD: 'ADD_BOOK_TO_BASKET',
    REMOVE_BOOK: 'REMOVE_BOOK_FROM_BASKET',
    CLEAR_BASKET: 'CLEAR_BASKET'
}
export const addBookToBasket = (bookId) => ({
    type: ACTION_TYPES.ADD,
    payload: bookId,
})
export const removeBookFromBasket = (bookId) => ({
    type: ACTION_TYPES.REMOVE_BOOK,
    payload: bookId,
})
export const clearAllBooksFromBasket = () => ({
    type: ACTION_TYPES.CLEAR_BASKET,
})