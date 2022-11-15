import { configureStore } from '@reduxjs/toolkit'
import { feedReducer } from '../slices'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../rootSaga'
const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: {
        feed: feedReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)
