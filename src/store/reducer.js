import { QUANTITY_STEP, INITIAL_QUANTITY } from '../constants/constants'
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

            const copyOfBasket = {
                ...state.items,
            }
            delete copyOfBasket[bookId]
            return {
                ...state,
                items: { ...copyOfBasket },
            }
        }
        case 'CLEAR_BASKET': {
            return {
                ...state,
                items: {},
            }
        }
        default:
            return state
    }
}