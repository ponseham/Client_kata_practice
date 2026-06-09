import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { createStore } from 'redux'
import basketReducer from './store/reducer.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'

const store = createStore(basketReducer)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
