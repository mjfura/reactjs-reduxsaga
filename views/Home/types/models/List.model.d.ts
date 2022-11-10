import { Movie } from './Movie.model'
import { Page } from './Page.model'

export interface List {
    total: number
    movies: Movie[]
    pages: Page[]
}
