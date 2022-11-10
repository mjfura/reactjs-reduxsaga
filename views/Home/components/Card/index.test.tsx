import { render, screen } from '@testing-library/react'
import Card from '.'

describe('Movie Card', () => {
    it('should render correctly', () => {
        render(<Card />)
        const img = screen.getByRole('img')
        const text = screen.getByText(/movie title/i)
        const button = screen.getByRole('button')
        expect(img).toBeInTheDocument()
        expect(text).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    })
})
