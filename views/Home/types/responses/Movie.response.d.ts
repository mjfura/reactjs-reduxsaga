export interface MovieResponse {
    title: string
    description: string
    images: {
        posterArt: {
            url: string
            width: number
            height: number
        }
    }
    releaseYear: number
}
