import { List } from '../types/models'
import { ListResponse } from '../types/responses'
import { createMovieAdapter } from './movie.adapter'

export const createListAdapter = (response: ListResponse): List => {
    return {
        total: response.total,
        movies: response.entries.map(createMovieAdapter),
        pages: response.links.map(el => ({
            label: el.label,
            active: el.active || false,
            url: el.link
        }))
    }
}
