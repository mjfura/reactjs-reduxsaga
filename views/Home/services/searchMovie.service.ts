import { tomatoes } from '@/config'
import { handleErrorResponse } from '@/utils'
import { ListResponse } from '../types/responses'

export const searchMovieService = async (
    search: string
): Promise<ListResponse> => {
    try {
        const { data } = await tomatoes.get<ListResponse>(
            `/movies/?search=${search}`
        )
        return data
    } catch (e) {
        throw handleErrorResponse(e)
    }
}
