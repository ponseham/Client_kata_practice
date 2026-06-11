import { BOOK_PRICE } from '../constants/books'
import { DISCOUNT_RATES } from '../constants/discount'
import { NO_DISCOUNT, QUANTITY_STEP, GROUP_OF_FIVE_BOOKS, GROUP_OF_THREE_BOOKS } from '../constants/constants'

export function calculateBasketPrice(basketItems) {
    let total = 0
    let subtotal = 0

    const discountBookSets = createBookSetsForDiscount(basketItems)
    const adjustedBookSets = adjustBookSetsForMaximumDiscount(discountBookSets)
    for (const bookSet of adjustedBookSets) {
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
function adjustBookSetsForMaximumDiscount(bookSetsForApplyDiscount) {
    let fiveAndThreeBookSets = findBookSetsForDiscountRule(bookSetsForApplyDiscount)
    while (findFiveAndThreeBookSets(fiveAndThreeBookSets)) {
        rebalanceTheBookSets(fiveAndThreeBookSets)
        fiveAndThreeBookSets = findBookSetsForDiscountRule(bookSetsForApplyDiscount)
    }
    return bookSetsForApplyDiscount
}

function findBookSetsForDiscountRule(bookSetsForDiscount) {
    return {
        fiveBookSet: findBookSetBySize(bookSetsForDiscount, GROUP_OF_FIVE_BOOKS),
        threeBookSet: findBookSetBySize(bookSetsForDiscount, GROUP_OF_THREE_BOOKS)
    }
}

function findBookSetBySize(bookSets, size) {
    return bookSets.find(bookSet => bookSet.size === size)
}

function findFiveAndThreeBookSets({ fiveBookSet, threeBookSet }) {
    return fiveBookSet && threeBookSet
}

function rebalanceTheBookSets(fiveAndThreeBooks) {
    const { fiveBookSet, threeBookSet } = fiveAndThreeBooks
    const bookToMove = findBookToMove(fiveBookSet, threeBookSet)
    moveBook(bookToMove, fiveBookSet, threeBookSet)
}

function findBookToMove(sourceBookSet, targetBookSet) {
    return [...sourceBookSet]
        .find(bookId => !targetBookSet.has(bookId))
}

function moveBook(bookId, sourceBookSet, targetBookSet) {
    sourceBookSet.delete(bookId)
    targetBookSet.add(bookId)
}

function calculatePrice(count) {
    return count * BOOK_PRICE
}

function calculateDiscountRate(count) {
    return DISCOUNT_RATES.get(count) ?? NO_DISCOUNT
}