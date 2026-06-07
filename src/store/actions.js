const ACTION_TYPES = {
    ADD: 'ADD_BOOK_TO_BASKET',
    REMOVE_SINGLE: 'REMOVE_SINGLE_BOOK'
}
export const addBookToBasket = (bookId) => ({
    type: ACTION_TYPES.ADD,
    payload: bookId,
})
export const removeSingleBookFromBasket = (bookId) => ({
    type: ACTION_TYPES.REMOVE_SINGLE,
    payload: bookId,
})