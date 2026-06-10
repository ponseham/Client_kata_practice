import { BOOK_PRICE } from '../constants/books'

export function calculateBasketPrice(basketItems) {
    let total = 0
    let basketSize = Object.keys(basketItems).length

    total = basketSize * BOOK_PRICE

    return { total }
}