import { useSearch } from '@/hooks'
import { render, screen } from '@testing-library/react'
import Header from '.'
jest.mock('@/hooks')
describe('Header Layout', () => {
    it('should render correctly', () => {
        const useSearchMocked = useSearch as jest.MockedFunction<
            typeof useSearch
        >
        useSearchMocked.mockReturnValue({
            input: '',
            handleChange: () => {}
        })
        render(<Header />)
        const imgs = screen.getAllByRole('img')
        const banner = screen.getByRole('banner')
        const input = screen.getByRole('searchbox')
        expect(imgs).toHaveLength(2)
        expect(input).toBeInTheDocument()
        expect(banner).toBeInTheDocument()
    })
})
