import { BOOK_PRICE } from '../constants/books'
import { DISCOUNT_RATES } from '../constants/discount'
import { NO_DISCOUNT, QUANTITY_STEP, GROUP_OF_FIVE_BOOKS, GROUP_OF_THREE_BOOKS } from '../constants/constants'

export function calculateBasketPrice(basketItems) {
    let total = 0
    let subtotal = 0
    let basketSize = Object.keys(basketItems).length

    const discountGroups = convertBasketItemsIntoGroups(basketItems)
    for (const group of discountGroups) {
        subtotal += calculatePriceForGroup(group.size)
        let discountRates = calculateDiscountPrice(group.size)
        total += calculatePriceForGroup(group.size) * (1 - discountRates)
    }
    return { subtotal, discount: subtotal - total, total }
}
function convertBasketItemsIntoGroups(basketItems) {
    const copyOfBasketItems = { ...basketItems }
    const discountGroups = []
    let hasBooks = hasRemainingBooksToGroup(copyOfBasketItems)
    while (hasBooks) {
        const group = new Set()
        Object.entries(copyOfBasketItems).forEach(([bookId, quantity]) => {
            if (quantity >= QUANTITY_STEP) {
                group.add(Number(bookId))
                copyOfBasketItems[bookId] = copyOfBasketItems[bookId] - QUANTITY_STEP
            }
        })
        discountGroups.push(group)
        hasBooks = hasRemainingBooksToGroup(copyOfBasketItems)
    }
    return convertFiveAndThreeToTwoGroupsOfFour(discountGroups)
}
function hasRemainingBooksToGroup(items) {
    for (const quantity of Object.values(items)) {
        if (quantity > 0) {
            return true
        }
    }
    return false
}
function convertFiveAndThreeToTwoGroupsOfFour(discountGroups) {
    let groupOfFiveBooks = findGroupOfFiveBooks(discountGroups)
    let groupOfThreeBooks = findGroupOfThreeBooks(discountGroups)

    if (!groupOfFiveBooks || !groupOfThreeBooks) {
        return discountGroups
    }

    while (groupOfFiveBooks && groupOfThreeBooks) {
        const bookToMove = [...groupOfFiveBooks].find(bookId => !groupOfThreeBooks.has(bookId))
        groupOfFiveBooks.delete(bookToMove)
        groupOfThreeBooks.add(bookToMove)
        groupOfFiveBooks = findGroupOfFiveBooks(discountGroups)
        groupOfThreeBooks = findGroupOfThreeBooks(discountGroups)
    }
    return discountGroups
}
function findGroupOfFiveBooks(discountGroups) {
    return discountGroups.find(group => group.size === GROUP_OF_FIVE_BOOKS)
}
function findGroupOfThreeBooks(discountGroups) {
    return discountGroups.find(group => group.size === GROUP_OF_THREE_BOOKS)
}
function calculatePriceForGroup(basketSize) {
    return basketSize * BOOK_PRICE
}
function calculateDiscountPrice(basketSize) {
    return DISCOUNT_RATES.get(basketSize) ?? NO_DISCOUNT
}