import { render, screen } from '@testing-library/react'
import App from '../App.jsx'
import * as CONSTANTS from '../constants/testingConstants.js'

describe('Book Store', () => {
    beforeEach(() => {
        render(<App />)
    })
    test('Show book store header', () => {
        expect(screen.getByText(CONSTANTS.STORE_HEADER_TITLE)).toBeInTheDocument()
    })
})