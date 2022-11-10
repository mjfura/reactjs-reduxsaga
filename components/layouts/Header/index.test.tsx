import { render, screen } from '@testing-library/react'
import Header from '.'
describe('Header Layout', () => {
    it('should render correctly', () => {
        render(<Header />)
        const imgs = screen.getAllByRole('img')
        const banner = screen.getByRole('banner')
        const input = screen.getByRole('searchbox')
        expect(imgs).toHaveLength(2)
        expect(input).toBeInTheDocument()
        expect(banner).toBeInTheDocument()
    })
})
