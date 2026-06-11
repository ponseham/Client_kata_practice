import { BOOK_PRICE } from '../constants/books'
import { DISCOUNT_RATES } from '../constants/discount'
import { NO_DISCOUNT } from '../constants/constants'

export function calculateBasketPrice(basketItems) {
    let total = 0
    let subtotal = 0
    let basketSize = Object.keys(basketItems).length

    subtotal = calculatePrice(basketSize)
    let discountRate = calculateDiscountRate(basketSize)
    total = calculatePrice(basketSize) * (1 - discountRate)

    return { subtotal, discount: subtotal - total, total }
}
function calculatePrice(count) {
    return count * BOOK_PRICE
}

function calculateDiscountRate(count) {
    return DISCOUNT_RATES.get(count) ?? NO_DISCOUNT
}