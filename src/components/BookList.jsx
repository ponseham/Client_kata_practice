import { BOOKS } from '../constants/books'
import BookCard from './BookCard'
import '../styles.css'

export default function BookList() {
    return (
        <div className="book-grid">
            {BOOKS.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    )
}