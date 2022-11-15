import { all } from 'redux-saga/effects'
import { movieSagas } from '../sagas'
export function* rootSaga() {
    yield all([...movieSagas])
}
