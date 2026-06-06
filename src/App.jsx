import Header from './components/Header'
import BookList from './components/BookList'
import DiscountInformation from './components/DiscountInformation'
import './styles.css'

export default function App() {
  return (
    <div>
      <Header />
      <div className="page-content">
        <div className="content-row">
          <div className="main-column">
            <BookList />
            <DiscountInformation />
          </div>
        </div>
      </div>
    </div>
  )
}
