import { useSelector } from 'react-redux'
import { TOTAL_LABEL, CURRENCY_LABEL, TEST_ID_TOTAL, DISPLAY_DECIMAL_PLACES, EMPTY_COUNT, SUBTOTAL_LABEL, TEST_ID_SUBTOTAL, DISCOUNT_LABEL, TEST_ID_DISCOUNT } from '../constants/constants'
import { calculateBasketPrice } from '../utils/priceCalculation'

export default function BasketSummary() {
    const basketItems = useSelector((state) => state.items)
    const pricingSummery = calculateBasketPrice(basketItems)
    return (
        <>
            <hr />
            {pricingSummery.discount > EMPTY_COUNT && (
                <div className="basket-price-row">
                    <span>{SUBTOTAL_LABEL}</span>
                    <span className="price-amount" data-testid={TEST_ID_SUBTOTAL}>{pricingSummery.subtotal.toFixed(DISPLAY_DECIMAL_PLACES)} {CURRENCY_LABEL}</span>
                </div>
            )}
            {pricingSummery.discount > EMPTY_COUNT && (
                <div className="basket-price-discount">
                    <span>{DISCOUNT_LABEL}</span>
                    <span className="price-amount" data-testid={TEST_ID_DISCOUNT}>-{pricingSummery.discount.toFixed(DISPLAY_DECIMAL_PLACES)} {CURRENCY_LABEL}</span>
                </div>
            )}
            <div className="basket-price-total">
                <span>{TOTAL_LABEL}</span>
                <span className="price-amount" data-testid={TEST_ID_TOTAL}>{pricingSummery.total.toFixed(DISPLAY_DECIMAL_PLACES)} {CURRENCY_LABEL}</span>
            </div>
        </>
    )
}