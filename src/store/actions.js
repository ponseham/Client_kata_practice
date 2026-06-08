const ACTION_TYPES = {
    ADD: 'ADD_BOOK_TO_BASKET'
}
export const addBookToBasket = (bookId) => ({
    type: ACTION_TYPES.ADD,
    payload: bookId,
})