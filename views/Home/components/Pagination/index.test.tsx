import { render, screen } from '@testing-library/react'
import Pagination from '.'
import { usePagination } from '../../hooks'
import { PAGES_MOCK } from './index.mock'
jest.mock('../../hooks')
describe('Pagination', () => {
    it('should render correctly', () => {
        const usePaginationMocked = usePagination as jest.MockedFunction<
            typeof usePagination
        >
        usePaginationMocked.mockReturnValue({
            page: 1,
            handleClick: () => {}
        })
        render(<Pagination pages={PAGES_MOCK} />)
        const nav = screen.getByRole('navigation')
        expect(nav).toBeInTheDocument()
    })
})
