import { GetStaticProps } from 'next'
import { getMovies } from '../services'

export const getStaticProps: GetStaticProps = async _ctx => {
    try {
        const list = await getMovies()
        return {
            props: {
                list
            }
        }
    } catch (e) {
        const error = e as Error
        return {
            props: {
                message: error.message
            }
        }
    }
}
