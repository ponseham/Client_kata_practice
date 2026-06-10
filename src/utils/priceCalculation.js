import { BOOK_PRICE } from '../constants/books'
import { DISCOUNT_RATES } from '../constants/discount'
import { NO_DISCOUNT } from '../constants/constants'

export function calculateBasketPrice(basketItems) {
    let total = 0
    let subtotal = 0
    let basketSize = Object.keys(basketItems).length

    subtotal = calculatePriceForGroup(basketSize)
    let discountRates = calculateDiscountPrice(basketSize)
    total = calculatePriceForGroup(basketSize) * (1 - discountRates)

    return { subtotal, discount: subtotal - total, total }
}
function calculatePriceForGroup(basketSize) {
    return basketSize * BOOK_PRICE
}
function calculateDiscountPrice(basketSize) {
    return DISCOUNT_RATES.get(basketSize) ?? NO_DISCOUNT
}