import { BOOK_PRICE } from '../constants/books'
import { DISCOUNT_RATES } from '../constants/discount'
import { EMPTY_COUNT, NO_DISCOUNT, GROUP_OF_FIVE_BOOKS, GROUP_OF_THREE_BOOKS } from '../constants/constants'

function convertBasketItemsToMap(basketItems) {
    const basketAsMap = new Map(
        Object.entries(basketItems).map(([bookId, quantity]) => [Number(bookId), quantity])
    )
    return basketAsMap
}
function remainingBooksToGroup(remainingCounts) {

    return [...remainingCounts.values()]
}
function findGroupOfFiveBooks(discountGroups) {
    return discountGroups.find(group => group.size === GROUP_OF_FIVE_BOOKS)
}
function findGroupOfThreeBooks(discountGroups) {
    return discountGroups.find(group => group.size === GROUP_OF_THREE_BOOKS)
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
function groupBooksIntoDiscountSets(basketCounts) {
    const remainingCounts = new Map(basketCounts)
    const discountGroups = []

    while (remainingBooksToGroup(remainingCounts).some((quantity) => quantity > EMPTY_COUNT)) {
        const currentGroup = new Set()
        for (const [bookId, quantity] of remainingCounts) {
            if (quantity > EMPTY_COUNT) {
                currentGroup.add(bookId)
                remainingCounts.set(bookId, quantity - 1)
            }
        }
        discountGroups.push(currentGroup)
    }
    return convertFiveAndThreeToTwoGroupsOfFour(discountGroups)
}
export function calculateBasketPrice(basketItems) {
    const basketCounts = convertBasketItemsToMap(basketItems)
    const discountGroups = groupBooksIntoDiscountSets(basketCounts)

    let total = 0
    let subtotal = 0

    for (const group of discountGroups) {
        subtotal += group.size * BOOK_PRICE
        const discountRate = DISCOUNT_RATES.get(group.size) ?? NO_DISCOUNT
        total += group.size * BOOK_PRICE * (1 - discountRate)
    }

    return { subtotal, discount: subtotal - total, total }
}