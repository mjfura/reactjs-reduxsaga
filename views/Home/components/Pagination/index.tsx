import leftArrow from '@/assets/svgs/left-arrow.svg'
import rightArrow from '@/assets/svgs/right-arrow.svg'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getFeedByPage, selectFeed } from '@/stateManagement/redux/slices'
import Image from 'next/image'
import { Page } from '../../types/models'
interface Props {
    pages: Page[]
}
export default function Pagination({ pages }: Props) {
    const { page } = useAppSelector(selectFeed)
    const dispatch = useAppDispatch()
    const handleClick = (page: number) => {
        dispatch(getFeedByPage(page))
    }
    return (
        <nav className="flex gap-4 pt-4">
            {pages.map((el, i) =>
                el.label === 'previous' && el.url !== null ? (
                    <Image
                        onClick={() => {
                            const beforePage = page - 1
                            handleClick(beforePage)
                        }}
                        className="cursor-pointer"
                        src={leftArrow}
                        alt="left-arrow cherry tomatoes"
                    />
                ) : el.label === 'next' && el.url !== null ? (
                    <Image
                        onClick={() => {
                            const nextPage = page + 1
                            handleClick(nextPage)
                        }}
                        className="cursor-pointer"
                        src={rightArrow}
                        alt="right-arrow cherry tomatoes"
                    />
                ) : el.url ? (
                    <span
                        onClick={() => {
                            const page = parseInt(el.label)
                            handleClick(page)
                        }}
                        key={i + '-pagination'}
                        className={`${
                            !el.active
                                ? 'opacity-60 hover:opacity-80 duration-300 transition-all ease-in-out '
                                : ''
                        } flex w-8 h-8 cursor-pointer justify-center items-center bg-primary text-white rounded-full`}
                    >
                        {el.label}
                    </span>
                ) : (
                    <></>
                )
            )}
        </nav>
    )
}
