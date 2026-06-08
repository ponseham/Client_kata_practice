import { INITIAL_QUANTITY, QUANTITY_STEP, EMPTY_COUNT } from '../constants/constants'
const initialState = {
    items: {},
}

export default function basketReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_BOOK_TO_BASKET': {
            const bookId = action.payload
            const currentQuantity = state.items[bookId] ?? INITIAL_QUANTITY
            return {
                ...state,
                items: {
                    ...state.items,
                    [bookId]: currentQuantity + QUANTITY_STEP,
                },
            }
        }
        case 'REMOVE_BOOK_FROM_BASKET': {
            const bookId = action.payload

            const updatedBasket = {
                ...state.items,
            }
            delete updatedBasket[bookId]
            return {
                ...state,
                items: { ...updatedBasket },
            }
        }
        case 'CLEAR_BASKET': {
            return {
                ...state,
                items: {},
            }
        }
        case 'REMOVE_SINGLE_COPY_OF_BBOK': {
            const bookId = action.payload
            const currentQuantity = state.items[bookId]
            const updatedQuantity = currentQuantity - QUANTITY_STEP

            const updatedBasket = {
                ...state.items,
            }
            if (updatedQuantity <= EMPTY_COUNT) {
                delete updatedBasket[bookId]
            } else {
                updatedBasket[bookId] = updatedQuantity
            }

            return {
                ...state,
                items: { ...updatedBasket },
            }
        }
        default:
            return state
    }
}