import { createListAdapter } from '@/views/Home/adapters'
import { getMovies } from '@/views/Home/services'
import { ListResponse } from '@/views/Home/types/responses'
import { call, fork, put, takeLatest } from 'redux-saga/effects'
import { getFeedByPage, setFeed } from '../slices'
function* fetchMovies({ payload }: { payload: number }) {
    try {
        const page = payload
        const list = (yield call(getMovies, page)) as ListResponse
        const listAdapted = createListAdapter(list)
        const currentPage = listAdapted.pages.find(el => !!el.active)?.label
        yield put(
            setFeed({
                pending: false,
                movies: listAdapted.movies,
                total: listAdapted.total,
                pages: listAdapted.pages,
                quantityPerPage: listAdapted.movies.length,
                page: currentPage ? parseInt(currentPage) : 1
            })
        )
    } catch (error) {
        console.log(error)
    }
}

function* movieSaga() {
    yield takeLatest(getFeedByPage, fetchMovies)
}
export const movieSagas = [fork(movieSaga)]
