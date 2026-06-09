import { useSelector } from 'react-redux'
import { TOTAL_LABEL, CURRENCY_LABEL, TEST_ID_TOTAL, DISPLAY_DECIMAL_PLACES } from '../constants/constants'
import { calculateBasketPrice } from '../utils/priceCalculation'

export default function BasketSummary() {
    const basketItems = useSelector((state) => state.items)
    const pricingSummery = calculateBasketPrice(basketItems)
    return (
        <>
            <hr />
            <div className="basket-price-total">
                <span>{TOTAL_LABEL}</span>
                <span className="price-amount" data-testid={TEST_ID_TOTAL}>{pricingSummery.total.toFixed(DISPLAY_DECIMAL_PLACES)} {CURRENCY_LABEL}</span>
            </div>
        </>
    )
}