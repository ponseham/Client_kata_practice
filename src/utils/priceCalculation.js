import { BOOK_PRICE } from '../constants/books'
import { DISCOUNT_RATES } from '../constants/discount'
import { NO_DISCOUNT, QUANTITY_STEP, GROUP_OF_FIVE_BOOKS, GROUP_OF_THREE_BOOKS } from '../constants/constants'

export function calculateBasketPrice(basketItems) {
    let total = 0
    let subtotal = 0

    const discountGroups = convertBasketItemsIntoGroups(basketItems)
    for (const group of discountGroups) {
        subtotal += calculatePriceForGroup(group.size)
        let discountRate = calculateDiscountPrice(group.size)
        total += calculatePriceForGroup(group.size) * (1 - discountRate)
    }
    return { subtotal, discount: subtotal - total, total }
}
function convertBasketItemsIntoGroups(basketItems) {
    const copyOfBasketItems = { ...basketItems }
    const discountGroups = []
    let hasBooksRemainingForGrouping = hasRemainingBooksToGroup(copyOfBasketItems)
    while (hasBooksRemainingForGrouping) {
        discountGroups.push(createBookGroup(copyOfBasketItems))
        hasBooksRemainingForGrouping = hasRemainingBooksToGroup(copyOfBasketItems)
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
function createBookGroup(copyOfBasketItems) {
    const group = new Set()
    Object.entries(copyOfBasketItems).forEach(([bookId, quantity]) => {
        if (quantity >= QUANTITY_STEP) {
            group.add(Number(bookId))
            copyOfBasketItems[bookId] = copyOfBasketItems[bookId] - QUANTITY_STEP
        }
    })
    return group
}
function convertFiveAndThreeToTwoGroupsOfFour(discountGroups) {
    let groups = findDiscountFiveAndThreeGroups(discountGroups)

    if (!groups.groupOfFiveBooks || !groups.groupOfThreeBooks) {
        return discountGroups
    }
    while (hasFiveAndThreeBookGroups(groups)) {
        convertFiveAndThreeToFourAndFour(groups)
        groups = findDiscountFiveAndThreeGroups(discountGroups)
    }
    return discountGroups
}
function findDiscountFiveAndThreeGroups(discountGroups) {
    return {
        groupOfFiveBooks: findGroupBySize(discountGroups, GROUP_OF_FIVE_BOOKS),
        groupOfThreeBooks: findGroupBySize(discountGroups, GROUP_OF_THREE_BOOKS)
    }
}
function findGroupBySize(discountGroups, groupSize) {
    return discountGroups.find(group => group.size === groupSize)
}
function hasFiveAndThreeBookGroups({ groupOfFiveBooks, groupOfThreeBooks }) {
    return groupOfFiveBooks && groupOfThreeBooks
}
function convertFiveAndThreeToFourAndFour({ groupOfFiveBooks, groupOfThreeBooks }) {
    const bookToMove = findBookToMove(groupOfFiveBooks, groupOfThreeBooks)

    groupOfFiveBooks.delete(bookToMove)
    groupOfThreeBooks.add(bookToMove)
}
function findBookToMove(groupOfFiveBooks, groupOfThreeBooks) {
    return [...groupOfFiveBooks].find(bookId => !groupOfThreeBooks.has(bookId))
}
function calculatePriceForGroup(basketSize) {
    return basketSize * BOOK_PRICE
}
function calculateDiscountPrice(basketSize) {
    return DISCOUNT_RATES.get(basketSize) ?? NO_DISCOUNT
}