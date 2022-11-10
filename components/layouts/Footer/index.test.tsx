import { render, screen } from '@testing-library/react'
import Footer from '.'

describe('Footer Layout', () => {
    it('should render correctly', () => {
        render(<Footer />)
        const text = screen.getByText(
            /© Copyright 2022 Dreadful Tomatoes. All rights reserved./i
        )
        const imgs = screen.getAllByRole('img')
        expect(text).toBeInTheDocument()
        expect(imgs).toHaveLength(3)
    })
})
