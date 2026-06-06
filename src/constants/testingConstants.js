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
