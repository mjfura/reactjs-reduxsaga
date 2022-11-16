import { useAppDispatch, useAppSelector } from '@/hooks'
import { getFeedByPage, selectFeed } from '@/stateManagement/redux/slices'

export const usePagination = () => {
    const { page } = useAppSelector(selectFeed)
    const dispatch = useAppDispatch()
    const handleClick = (page: number) => {
        dispatch(getFeedByPage(page))
    }
    return { page, handleClick }
}
