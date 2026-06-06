import { render, screen } from '@testing-library/react'
import App from '../App.jsx'
import * as CONSTANTS from '../constants/testingConstants.js'

describe('Book Store', () => {
    test('Show book store header', () => {
        render(<App />)
        expect(screen.getByText(CONSTANTS.STORE_HEADER_TITLE)).toBeInTheDocument()
    })
})