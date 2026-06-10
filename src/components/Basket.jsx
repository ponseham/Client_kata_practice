import { useSelector } from 'react-redux'
import { BASKET_SECTION_TITLE, BASKET_EMPTY_MESSAGE, EMPTY_COUNT } from '../constants/constants'
import { BOOKS } from '../constants/books'
import BasketItem from './BasketItem'
import '../styles.css'

export default function Basket() {
    const basketItems = useSelector((state) => state.items)
    const booksInBasket = BOOKS.filter(
        (book) => basketItems[book.id] !== undefined
    )
    const hasItems = booksInBasket.length > EMPTY_COUNT


    return (
        <div className="sidebar-column">
            <div className="basket">
                <div className="basket-header">
                    <h5>{BASKET_SECTION_TITLE}</h5>
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