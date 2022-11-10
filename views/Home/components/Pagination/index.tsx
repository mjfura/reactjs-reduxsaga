import { Page } from '../../types/models'

interface Props {
    pages: Page[]
}
export default function Pagination({ pages }: Props) {
    return (
        <nav>
            {pages.map((page, i) => (
                <span
                    key={i + '-pagination'}
                    className="flex w-8 h-8 justify-center items-center bg-primary text-white rounded-full"
                >
                    {page.label}
                </span>
            ))}
        </nav>
    )
}
