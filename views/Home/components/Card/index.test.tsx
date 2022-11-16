import { render, screen } from '@testing-library/react'
import Card from '.'
import { MOCK_CARD } from './index.mock'

describe('Movie Card', () => {
    it('should render correctly', () => {
        render(<Card movie={MOCK_CARD} />)
        const img = screen.getByRole('img')
        const titles = screen.getAllByText(MOCK_CARD.title)
        expect(img).toBeInTheDocument()
        expect(titles).toHaveLength(2)
    })
})
