import { useDispatch } from 'react-redux'
import { CURRENCY_LABEL, ADD_BUTTON_LABEL } from '../constants/constants'
import { ADD_TO_BASKET_ARIA_LABEL } from '../constants/ariaConstants'
import { BOOK_PRICE } from '../constants/books'
import { addBookToBasket } from '../store/actions'
import '../styles.css'

function BookCard({ book }) {
    const dispatch = useDispatch()
    function handleAddBook() {
        dispatch(addBookToBasket(book.id))
    }
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
                        {ADD_BUTTON_LABEL}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default BookCard