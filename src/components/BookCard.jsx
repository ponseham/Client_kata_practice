import { CURRENCY_LABEL } from '../constants/constants'
import { BOOK_PRICE } from '../constants/books'
import '../styles.css'

function BookCard({ book }) {
    return (
        <div className="book-card">
            <img src={book.coverUrl} alt={book.title} />
            <div className="book-info">
                <h6>{book.title}</h6>
                <p>{book.author}</p>
                <div className="book-price-row">
                    <strong>{BOOK_PRICE} {CURRENCY_LABEL}</strong>
                </div>
            </div>
        </div>
    )
}
export default BookCard