import { MIX_AND_SAVE_TEXT, DISCOUNT_INFO_TEXT } from '../constants/constants'
function DiscountInformation() {
    return (
        <div className="discount-info">
            <strong>{MIX_AND_SAVE_TEXT} </strong>
            {DISCOUNT_INFO_TEXT}
        </div>
    )
}
export default DiscountInformation