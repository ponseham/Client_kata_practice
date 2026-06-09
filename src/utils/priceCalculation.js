import { BOOK_PRICE } from '../constants/books'
import { DISCOUNT_RATES } from '../constants/discount'

export function calculateBasketPrice(basketItems) {
    let subtotal = 0
    let total = 0
    let basketSize = Object.keys(basketItems).length

    subtotal = basketSize * BOOK_PRICE
    let discount = DISCOUNT_RATES.get(basketSize) ?? 0
    total = basketSize * BOOK_PRICE * (1 - discount)

    return { subtotal, discount: subtotal - total, total }
}