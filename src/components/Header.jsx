import { useSelector } from 'react-redux'
import { STORE_HEADER_TITLE, SINGLE_ITEM_COUNT, IN_BASKET_SUFFIX, ITEMS, ITEM, EMPTY_COUNT } from '../constants/constants'

function Header() {

    function getTotalItemCount(basketItems) {
        return Object.values(basketItems).reduce(
            (sum, quantity) => sum + quantity,
            EMPTY_COUNT
        )
    }
    const basketItems = useSelector((state) => state.items)
    const totalItemCount = getTotalItemCount(basketItems)
    const itemLabel = (totalItemCount === SINGLE_ITEM_COUNT) ? ITEM : ITEMS

    return (
        <div className="header">
            <div className="container-row">
                <h1>{STORE_HEADER_TITLE}</h1>
                <span>{totalItemCount} {itemLabel} {IN_BASKET_SUFFIX}</span>
            </div>
        </div>
    )
}
export default Header