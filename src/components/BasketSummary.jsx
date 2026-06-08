import { useSelector } from 'react-redux'
import { SUBTOTAL_LABEL, TOTAL_LABEL, CURRENCY_LABEL, TEST_ID_TOTAL, TEST_ID_SUBTOTAL } from '../constants/constants'

export default function BasketSummary() {
    const pricingSummery = { total: 50.00, subtotal: 50.00 }

    return (
        <>
            <hr />
            <div className="basket-price-row">
                <span>{SUBTOTAL_LABEL}</span>
                <span className="price-amount" data-testid={TEST_ID_TOTAL}>{pricingSummery.subtotal.toFixed(2)} {CURRENCY_LABEL}</span>
            </div>
            <div className="basket-price-total">
                <span>{TOTAL_LABEL}</span>
                <span className="price-amount" data-testid={TEST_ID_SUBTOTAL}>{pricingSummery.total.toFixed(2)} {CURRENCY_LABEL}</span>
            </div>
        </>
    )
}