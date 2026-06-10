import { TEST_ID_BASKET_ITEM } from '../constants/constants'
import '../styles.css'

export default function BasketItem({ book }) {
    return (
        <div className="basket-item" data-testid={TEST_ID_BASKET_ITEM}>
            <span>
                {book.title}
            </span>
        </div>
    )
}