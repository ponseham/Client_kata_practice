import { BOOK_PRICE } from '../constants/books'

export function calculateBasketPrice(basketItems) {
    let subtotal = 0
    let total = 0
    let basketSize = Object.keys(basketItems).length

    subtotal = basketSize * BOOK_PRICE
    let discount = 0

    total = basketSize * BOOK_PRICE

    return { subtotal, discount: discount, total }
}