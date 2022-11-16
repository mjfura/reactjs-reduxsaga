import { useAppDispatch, useAppSelector } from '@/hooks'
import { getFeedByPage, selectFeed } from '@/stateManagement/redux/slices'
import { useEffect } from 'react'

export const useMovieList = () => {
    const dispatch = useAppDispatch()
    const { movies, pages, pending } = useAppSelector(selectFeed)
    useEffect(() => {
        dispatch(getFeedByPage(1))
    }, [])
    return { movies, pages, pending }
}
