import { useAppDispatch, useAppSelector } from '@/hooks'
import { selectFeed, setFeed } from '@/stateManagement/redux/slices'
import { useEffect } from 'react'
import { createListAdapter } from '../adapters'
import { ListResponse } from '../types/responses'

export const useMovieList = (initialList: ListResponse) => {
    const dispatch = useAppDispatch()
    const { movies, pages, pending } = useAppSelector(selectFeed)
    useEffect(() => {
        const listAdapted = createListAdapter(initialList)
        dispatch(
            setFeed({
                movies: listAdapted.movies,
                pages: listAdapted.pages,
                total: listAdapted.total,
                quantityPerPage: listAdapted.movies.length,
                page: 1,
                pending: false
            })
        )
    }, [])
    return { movies, pages, pending }
}
