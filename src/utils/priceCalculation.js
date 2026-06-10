import { BOOK_PRICE } from '../constants/books'

export function calculateBasketPrice(basketItems) {
    let total = 0
    let subtotal = 0
    let basketSize = Object.keys(basketItems).length

    subtotal = basketSize * BOOK_PRICE
    let discount = 0
    if (basketSize === 2)
        discount = 0.05
    else if (basketSize === 3)
        discount = 0.10;
    else if (basketSize === 4)
        discount = 0.20;
    else if (basketSize === 5)
        discount = 0.25;
    total = basketSize * BOOK_PRICE * (1 - discount)

    return { subtotal, discount: subtotal - total, total }
}