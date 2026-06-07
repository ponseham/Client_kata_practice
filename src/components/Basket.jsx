import { useSelector } from 'react-redux'
import { BASKET_SECTION_TITLE, BASKET_EMPTY_MESSAGE } from '../constants/constants'
import { selectHasItemsInBasket } from '../store/selectors'
import { BOOKS } from '../constants/books'
import BasketItem from './BasketItem'
import '../styles.css'

export default function Basket() {
    const hasItems = useSelector(selectHasItemsInBasket)
    const basketItems = useSelector((state) => state.items)
    const booksInBasket = BOOKS.filter(
        (book) => basketItems[book.id] !== undefined
    )

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