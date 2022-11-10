import { MovieResponse } from './Movie.response'

export interface ListResponse {
    total: number
    entries: MovieResponse[]
}
