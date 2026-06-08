import { useDispatch, useSelector } from 'react-redux'
import { TEST_ID_BASKET_ITEM, REMOVE_BUTTON_LABEL, REMOVE_BUTTON_ARIA_LABEL, BOOK_QUANTITY_SEPARATOR } from '../constants/constants'
import { removeBookFromBasket } from '../store/actions'
import { selectBookQuantity } from '../store/selectors'

import '../styles.css'

export default function BasketItem({ book }) {
    const quantity = useSelector(selectBookQuantity(book.id))
    const dispatch = useDispatch()
    function handleRemoveBook() {
        dispatch(removeBookFromBasket(book.id))
    }
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