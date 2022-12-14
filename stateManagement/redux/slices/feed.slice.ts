import { RootState } from '@/types/redux'
import { Feed } from '@/types/states'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { States } from '../states'

export const initialState: Feed = {
    pending: false,
    movies: [],
    total: 0,
    pages: [],
    quantityPerPage: 0,
    page: 1
}
export const feedSlice = createSlice({
    name: States.Feed,
    initialState,
    reducers: {
        searchMovie: (state, _action: PayloadAction<string>) => {
            state.pending = true
        },
        getFeedByPage: (state, _action: PayloadAction<number>) => {
            state.pending = true
        },
        setFeed: (_state, action: PayloadAction<Feed>) => {
            return action.payload
        },
        clearState: () => {
            return initialState
        }
    }
})
export const { searchMovie, getFeedByPage, clearState, setFeed } =
    feedSlice.actions
export const selectFeed = (state: RootState) => state.feed
export const feedReducer = feedSlice.reducer
