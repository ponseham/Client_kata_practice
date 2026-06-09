import { QUANTITY_STEP } from '../constants/constants'
const initialState = {
    items: {},
}

export default function basketReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_BOOK_TO_BASKET': {
            const bookId = action.payload
            return {
                ...state,
                items: {
                    ...state.items,
                    [bookId]: QUANTITY_STEP,
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