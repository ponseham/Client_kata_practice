import { useDispatch, useSelector } from 'react-redux'
import { TEST_ID_BASKET_ITEM, REMOVE_BUTTON_LABEL, BOOK_QUANTITY_SEPARATOR } from '../constants/constants'
import { REMOVE_BUTTON_ARIA_LABEL } from '../constants/ariaConstants'
import { removeBookFromBasket } from '../store/actions'

import '../styles.css'

export default function BasketItem({ book }) {
    const dispatch = useDispatch()
    function handleRemoveBook() {
        dispatch(removeBookFromBasket(book.id))
    }
    const quantity = useSelector((state) => state.items[book.id])
    return (
        <div className="basket-item" data-testid={TEST_ID_BASKET_ITEM}>
            <span>
                {book.title}
                <span className="quantity-badge">{BOOK_QUANTITY_SEPARATOR}{quantity}</span>
            </span>
            <button
                className="remove-button"
                aria-label={REMOVE_BUTTON_ARIA_LABEL.replace('_', book.title)}
                onClick={handleRemoveBook}
            >
                {REMOVE_BUTTON_LABEL}
            </button>
        </div>
    )
}