import { MovieResponse } from './Movie.response'

export interface ListResponse {
    total: number
    entries: MovieResponse[]
    pages: [
        {
            label: string
            url: string
            active: boolean
        }
    ]
}
