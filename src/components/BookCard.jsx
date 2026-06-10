import { useDispatch, useSelector } from 'react-redux'
import { CURRENCY_LABEL, ADD_BUTTON_LABEL, ADD_ONE_MORE_PREFIX, REMOVE_SINGLE_BOOK_BUTTON_LABEL } from '../constants/constants'
import { REMOVE_SINGLE_BOOK_FROM_BASKET_ARIA_LABEL } from '../constants/ariaConstants'
import { ADD_TO_BASKET_ARIA_LABEL } from '../constants/ariaConstants'
import { BOOK_PRICE } from '../constants/books'
import { addBookToBasket, removeSingleBookFromBasket } from '../store/actions'
import '../styles.css'

function BookCard({ book }) {
    const dispatch = useDispatch()
    function handleAddBook() {
        dispatch(addBookToBasket(book.id))
    }
    function handleRemoveSingleBook() {
        dispatch(removeSingleBookFromBasket(book.id))
    }

    const isBookAddedToBasket = useSelector((state) => state.items[book.id])
    const addButtonLabel = isBookAddedToBasket
        ? `${ADD_ONE_MORE_PREFIX}`
        : ADD_BUTTON_LABEL

    return (
        <div className="book-card">
            <img src={book.coverUrl} alt={book.title} />
            <div className="book-info">
                <h6>{book.title}</h6>
                <p>{book.author}</p>
                <div className="book-price-row">
                    <strong>{BOOK_PRICE} {CURRENCY_LABEL}</strong>
                    <button
                        className="add-button"
                        aria-label={ADD_TO_BASKET_ARIA_LABEL.replace('_', book.title)}
                        onClick={handleAddBook}
                    >
                        {addButtonLabel}
                    </button>
                    {isBookAddedToBasket && <button
                        className="remove-single-book"
                        aria-label={REMOVE_SINGLE_BOOK_FROM_BASKET_ARIA_LABEL.replace('_', book.title)}
                        onClick={handleRemoveSingleBook}
                    >
                        {REMOVE_SINGLE_BOOK_BUTTON_LABEL}
                    </button>
                    }
                </div>
            </div>
        </div>
    )
}
export default BookCard