import { STORE_HEADER_TITLE } from '../constants/constants'

function Header() {
    return (
        <div className="header">
            <div className="container-row">
                <h1>{STORE_HEADER_TITLE}</h1>
            </div>
        </div>
    )
}
export default Header