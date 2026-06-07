import { useSelector } from 'react-redux'
import { TEST_ID_BASKET_ITEM, BOOK_QUANTITY_SEPARATOR } from '../constants/constants'
import { selectBookQuantity } from '../store/selectors'
import '../styles.css'

export default function BasketItem({ book }) {
    const quantity = useSelector(selectBookQuantity(book.id))

    return (
        <div className="basket-item" data-testid={TEST_ID_BASKET_ITEM}>
            <span>
                {book.title}
                <span className="quantity-badge">{BOOK_QUANTITY_SEPARATOR}{quantity}</span>
            </span>
        </div>
    )
}