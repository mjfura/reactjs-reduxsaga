import Layout from '@/components/layouts'
import Card from './components/Card'
import Pagination from './components/Pagination'
import { useMovieList } from './hooks'
import { ListResponse } from './types/responses'
interface Props {
    list: ListResponse
}
export default function Home({ list }: Props) {
    const { movies, pages, pending } = useMovieList(list)
    return (
        <Layout>
            <section className="min-h-screen px-20 py-4 bg-black">
                <h2 className="font-bold text-2xl text-white ">
                    Popular Movies
                </h2>
                <div
                    className={`grid grid-cols-auto place-items-center lg:grid-cols-5 gap-4 py-4 ${
                        pending ? 'animate-pulse' : ''
                    } `}
                >
                    {movies.map((movie, i) => (
                        <Card
                            key={i + '-' + movie.title}
                            movie={movie}
                        />
                    ))}
                </div>
                <div className="flex justify-center">
                    <Pagination pages={pages} />
                </div>
            </section>
        </Layout>
    )
}
