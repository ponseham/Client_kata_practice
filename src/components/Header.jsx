import { useSelector } from 'react-redux'
import { STORE_HEADER_TITLE, SINGLE_ITEM_COUNT, IN_BASKET_SUFFIX, ITEMS, ITEM } from '../constants/constants'
import { selectTotalItemCount } from '../store/selectors'

function Header() {
    const totalItemCount = useSelector(selectTotalItemCount)
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