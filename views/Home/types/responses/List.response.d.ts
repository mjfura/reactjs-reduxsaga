import { MovieResponse } from './Movie.response'

export interface ListResponse {
    total: number
    entries: MovieResponse[]
    links: [
        {
            label: string
            link: string
            active?: boolean
        }
    ]
}
