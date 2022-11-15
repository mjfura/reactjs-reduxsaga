import { Movie, Page } from '../models'

export interface Feed {
    pending: boolean
    movies: Array<Movie>
    pages: Array<Page>
    total: number
    quantityPerPage: number
    page: number
}
