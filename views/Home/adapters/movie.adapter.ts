import { Movie } from '../types/models'
import { MovieResponse } from '../types/responses'

export const createMovieAdapter = (response: MovieResponse): Movie => {
    return {
        _id: response.id.toString(),
        title: response.title,
        description: response.description,
        img: response.images.posterArt.url,
        width: response.images.posterArt.width,
        height: response.images.posterArt.height,
        year: response.releaseYear
    }
}
