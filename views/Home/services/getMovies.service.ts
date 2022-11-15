import { tomatoes } from '@/config'
import { handleErrorResponse } from '@/utils'
import { ListResponse } from '../types/responses'

export const getMovies = async (page?: number): Promise<ListResponse> => {
    try {
        const { data } = await tomatoes.get<ListResponse>(
            `/movies${page ? '/?page=' + page : ''}`
        )
        return data
    } catch (e) {
        throw handleErrorResponse(e)
    }
}
