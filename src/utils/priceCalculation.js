import { BOOK_PRICE } from '../constants/books'
import { DISCOUNT_RATES } from '../constants/discount'
import { NO_DISCOUNT } from '../constants/constants'

export function calculateBasketPrice(basketItems) {
    let total = 0
    let subtotal = 0
    let basketSize = Object.keys(basketItems).length

    subtotal = calculatePriceForBasket(basketSize)
    let discountRate = calculateDiscountForBasket(basketSize)
    total = calculatePriceForBasket(basketSize) * (1 - discountRate)

    return { subtotal, discount: subtotal - total, total }
}
function calculatePriceForBasket(basketSize) {
    return basketSize * BOOK_PRICE
}

function calculateDiscountForBasket(basketSize) {
    return DISCOUNT_RATES.get(basketSize) ?? NO_DISCOUNT
}