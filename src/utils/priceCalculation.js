import { BOOK_PRICE } from '../constants/books'

export function calculateBasketPrice(basketItems) {
    let total = 0
    let subtotal = 0
    let basketSize = Object.keys(basketItems).length

    subtotal = basketSize * BOOK_PRICE
    let discount = 0
    if (basketSize === 2)
        discount = 0.05

    total = basketSize * BOOK_PRICE * (1 - discount)

    return { subtotal, discount: subtotal - total, total }
}