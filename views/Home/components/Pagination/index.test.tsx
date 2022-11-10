import { render, screen } from '@testing-library/react'
import Pagination from '.'
import { PAGES_MOCK } from './index.mock'

describe('Pagination', () => {
    it('should render correctly', () => {
        render(<Pagination pages={PAGES_MOCK} />)
        const nav = screen.getByRole('navigation')
        expect(nav).toBeInTheDocument()
    })
})
