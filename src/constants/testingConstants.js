export const STORE_HEADER_TITLE = 'Books Store'

export const BOOK_IMAGE_URL = '/images'

export const BOOKS = [
    { id: 1, title: 'Clean Code', author: 'Robert C. Martin', coverUrl: `${BOOK_IMAGE_URL}/Kata_DevelopmentBooks_CleanCode.png` },
    { id: 2, title: 'The Clean Coder', author: 'Robert C. Martin', coverUrl: `${BOOK_IMAGE_URL}/Kata_DevelopmentBooks_CleanCoder.png` },
    { id: 3, title: 'Clean Architecture', author: 'Robert C. Martin', coverUrl: `${BOOK_IMAGE_URL}/Kata_DevelopmentBooks_CleanArchitecture.jpeg` },
    { id: 4, title: 'Test-Driven Development', author: 'Kent Beck', coverUrl: `${BOOK_IMAGE_URL}/Kata_DevelopmentBooks_TDD.jpeg` },
    { id: 5, title: 'Working Effectively with Legacy Code', author: 'Michael Feathers', coverUrl: `${BOOK_IMAGE_URL}/Kata_DevelopmentBooks_Refactoring.jpeg` },
]

export const BOOKS_BY_SAME_AUTHOR = {
    'Robert C. Martin': 3,
    'Kent Beck': 1,
    'Michael Feathers': 1
}
export const BOOK_PRICE = 50

export const CURRENCY_LABEL = 'EUR'

export const MIX_AND_SAVE_TEXT = 'Mix & Save:'
export const DISCOUNT_INFO_TEXT = '2 Books = 5% off · 3 Books = 10% off · 4 Books = 20% off · 5 Books = 25% off'


export const BASKET_SECTION_TITLE = 'Your Basket'
export const BASKET_EMPTY_MESSAGE = 'Your basket is empty'

export const ADD_BUTTON_LABEL = '+Add'
export const ADD_TO_BASKET_ARIA_LABEL = 'Add _ to basket'
export const TEST_ID_BASKET_ITEM = 'basket-item'
export const EXPECTED_BOOK_TITLE_DISPLAY_COUNT = 2

export const REMOVE_BUTTON_LABEL = 'X'
export const REMOVE_BUTTON_ARIA_LABEL = 'Remove _'
export const EMPTY_COUNT = 0
export const EXPECTED_BOOK_TITLE_DISPLAY_COUNT_AFTER_REMOVE_BOOK = 1


export const CLEAR_BUTTON_LABEL = 'Clear'
export const CLEAR_BASKET_ARIA_LABEL = 'Clear basket'

export const TOTAL_LABEL = 'Total'
export const TEST_ID_TOTAL = 'total'
export const DISCOUNT_LABEL = 'Discount'
export const SUBTOTAL_LABEL = 'Subtotal'
export const ONE_BOOK_PRICE_WITHOUT_DISCOUNT_AMOUNT = '50.00'
export const TEST_ID_SUBTOTAL = 'subtotal'
export const TEST_ID_DISCOUNT = 'discount'
export const TWO_BOOK_WITH_DISCOUNT_TOTAL = '95.00'
export const TWO_BOOK_WITH_DISCOUNT_SUBTOTAL = '100.00'
export const TWO_BOOK_WITH_DISCOUNT_DISCOUNT = '-5.00'
export const THREE_BOOK_WITH_DISCOUNT_TOTAL = '135.00'
export const THREE_BOOK_WITH_DISCOUNT_SUBTOTAL = '150.00'
export const THREE_BOOK_WITH_DISCOUNT_DISCOUNT = '-15.00'
export const FOUR_BOOK_WITH_DISCOUNT_TOTAL = '160.00'
export const FOUR_BOOK_WITH_DISCOUNT_SUBTOTAL = '200.00'
export const FOUR_BOOK_WITH_DISCOUNT_DISCOUNT = '-40.00'
export const FIVE_BOOK_WITH_DISCOUNT_TOTAL = '187.50'
export const FIVE_BOOK_WITH_DISCOUNT_SUBTOTAL = '250.00'
export const FIVE_BOOK_WITH_DISCOUNT_DISCOUNT = '-62.50'

export const BOOK_QUANTITY_SEPARATOR = '×'

export const SEVEN_BOOK_WITH_DISCOUNT_TOTAL = '282.50'
export const SEVEN_BOOK_WITH_DISCOUNT_SUBTOTAL = '350.00'
export const SEVEN_BOOK_WITH_DISCOUNT_DISCOUNT = '-67.50'

export const QUANTITY_ONE_DISPLAY = '1'
export const QUANTITY_TWO_DISPLAY = '2'
export const EXPECTED_QUANTITY_ONE_DISPLAY_COUNT = 3
export const EXPECTED_QUANTITY_TWO_DISPLAY_COUNT = 2

export const THREE_SETS_OF_BOOKS_WITH_DISCOUNT_TOTAL = '507.50'
export const THREE_SETS_OF_BOOKS_BOOKS_WITH_DISCOUNT_SUBTOTAL = '650.00'
export const THREE_SETS_OF_BOOKS_BOOKS_WITH_DISCOUNT_DISCOUNT = '-142.50'

export const QUANTITY_STEP = 1
export const ADD_ONE_MORE_PREFIX = '+1'
export const REMOVE_SINGLE_BOOK_BUTTON_LABEL = '-1'
export const REMOVE_SINGLE_BOOK_FROM_BASKET_ARIA_LABEL = 'Remove one copy of _ from basket'