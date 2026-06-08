import { useSelector, useDispatch } from 'react-redux'
import { BASKET_SECTION_TITLE, BASKET_EMPTY_MESSAGE, CLEAR_BUTTON_LABEL, CLEAR_BASKET_ARIA_LABEL } from '../constants/constants'
import { selectHasItemsInBasket } from '../store/selectors'
import { clearAllBooksFromBasket } from '../store/actions'
import { BOOKS } from '../constants/books'
import BasketItem from './BasketItem'
import BasketSummary from './BasketSummary'
import '../styles.css'

export default function Basket() {
    const dispatch = useDispatch()
    const hasItems = useSelector(selectHasItemsInBasket)
    const basketItems = useSelector((state) => state.items)
    const booksInBasket = BOOKS.filter(
        (book) => basketItems[book.id] !== undefined
    )

    function handleClearBasket() {
        dispatch(clearAllBooksFromBasket())
    }

    return (
        <div className="sidebar-column">
            <div className="basket">
                <div className="basket-header">
                    <h5>{BASKET_SECTION_TITLE}</h5>
                    {hasItems && (
                        <button
                            className="clear-button"
                            aria-label={CLEAR_BASKET_ARIA_LABEL}
                            onClick={handleClearBasket}
                        >
                            {CLEAR_BUTTON_LABEL}
                        </button>
                    )}
                </div>
                {hasItems ? (
                    <>
                        {booksInBasket.map((book) => (
                            <BasketItem key={book.id} book={book} />
                        ))}
                        <BasketSummary />
                    </>
                ) : (
                    <p className="empty-message">{BASKET_EMPTY_MESSAGE}</p>
                )}

            </div>
        </div>
    )
}