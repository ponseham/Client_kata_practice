import { BOOK_PRICE } from '../constants/books'
import { DISCOUNT_RATES } from '../constants/discount'
import { NO_DISCOUNT, QUANTITY_STEP } from '../constants/constants'

export function calculateBasketPrice(basketItems) {
    let total = 0
    let subtotal = 0

    const discountBookSets = createBookSetsForDiscount(basketItems)
    for (const bookSet of discountBookSets) {
        subtotal += calculatePrice(bookSet.size)
        let discountRate = calculateDiscountRate(bookSet.size)
        total += calculatePrice(bookSet.size) * (1 - discountRate)
    }

    return { subtotal, discount: subtotal - total, total }
}
function createBookSetsForDiscount(basketItems) {
    const discountBookSets = []
    const remainingBooksToCreateSet = { ...basketItems }
    while (hasBooksToCreateSets(remainingBooksToCreateSet)) {
        const bookSet = createBookSet(remainingBooksToCreateSet)
        discountBookSets.push(bookSet)
    }
    return discountBookSets
}

function hasBooksToCreateSets(items) {
    return Object.values(items).some(quantity => quantity > 0)
}

function createBookSet(itemsInBasket) {
    const newBookSet = new Set()
    Object.entries(itemsInBasket).forEach(([bookId, quantity]) => {
        if (quantity >= QUANTITY_STEP) {
            newBookSet.add(Number(bookId))
            itemsInBasket[bookId] = itemsInBasket[bookId] - QUANTITY_STEP
        }
    })
    return newBookSet
}

function calculatePrice(count) {
    return count * BOOK_PRICE
}

function calculateDiscountRate(count) {
    return DISCOUNT_RATES.get(count) ?? NO_DISCOUNT
}