import Layout from '@/components/layouts'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getFeed, selectFeed } from '@/stateManagement/redux/slices'
import { useEffect } from 'react'
import Card from './components/Card'
import Pagination from './components/Pagination'

export default function Home() {
    const dispatch = useAppDispatch()
    const { pending, movies, pages } = useAppSelector(selectFeed)
    useEffect(() => {
        dispatch(getFeed(1))
    }, [])
    return (
        <Layout>
            <section className="min-h-screen px-20 py-4 bg-black">
                <h2 className="font-bold text-2xl text-white ">
                    Popular Movies
                </h2>
                {pending && <p>Cargando Películas</p>}
                <div className="grid grid-cols-5 gap-4 py-4">
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
