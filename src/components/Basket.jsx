import { BASKET_SECTION_TITLE, BASKET_EMPTY_MESSAGE } from '../constants/constants'
import '../styles.css'

export default function Basket() {
    return (
        <div className="sidebar-column">
            <div className="basket">
                <div className="basket-header">
                    <h5>{BASKET_SECTION_TITLE}</h5>
                </div>
                <p className="empty-message">{BASKET_EMPTY_MESSAGE}</p>
            </div>
        </div>
    )
}