import { useSelector, useDispatch } from 'react-redux'
import { BASKET_SECTION_TITLE, BASKET_EMPTY_MESSAGE, EMPTY_COUNT, CLEAR_BUTTON_LABEL } from '../constants/constants'
import { CLEAR_BASKET_ARIA_LABEL } from '../constants/ariaConstants'
import { clearAllBooksFromBasket } from '../store/actions'
import { BOOKS } from '../constants/books'
import BasketItem from './BasketItem'
import '../styles.css'

export default function Basket() {
    const dispatch = useDispatch()
    const basketItems = useSelector((state) => state.items)
    const booksInBasket = BOOKS.filter(
        (book) => basketItems[book.id] !== undefined
    )
    const hasItems = booksInBasket.length > EMPTY_COUNT


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
                    </>
                ) : (
                    <p className="empty-message">{BASKET_EMPTY_MESSAGE}</p>
                )}

            </div>
        </div>
    )
}