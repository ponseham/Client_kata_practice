import { useSelector } from 'react-redux'
import { SUBTOTAL_LABEL, TOTAL_LABEL, CURRENCY_LABEL, TEST_ID_TOTAL, TEST_ID_SUBTOTAL, DISPLAY_DECIMAL_PLACES } from '../constants/constants'
import { calculateBasketPrice } from '../utils/priceCalculation'

export default function BasketSummary() {
    const basketItems = useSelector((state) => state.items)
    const pricingSummery = calculateBasketPrice(basketItems)
    return (
        <>
            <hr />
            <div className="basket-price-row">
                <span>{SUBTOTAL_LABEL}</span>
                <span className="price-amount" data-testid={TEST_ID_TOTAL}>{pricingSummery.subtotal.toFixed(DISPLAY_DECIMAL_PLACES)} {CURRENCY_LABEL}</span>
            </div>
            <div className="basket-price-total">
                <span>{TOTAL_LABEL}</span>
                <span className="price-amount" data-testid={TEST_ID_SUBTOTAL}>{pricingSummery.total.toFixed(DISPLAY_DECIMAL_PLACES)} {CURRENCY_LABEL}</span>
            </div>
        </>
    )
}