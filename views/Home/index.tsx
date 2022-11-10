import Layout from '@/components/layouts'
import { createListAdapter } from './adapters'
import Card from './components/Card'
import { LIST_MOCK } from './index.mock'

export default function Home() {
    return (
        <Layout>
            <section className="min-h-screen px-20 py-4 bg-black">
                <h2 className="font-bold text-2xl text-white ">
                    Popular Movies
                </h2>
                <div className="grid grid-cols-5 gap-4 py-4">
                    {createListAdapter(LIST_MOCK).movies.map((movie, i) => (
                        <Card
                            key={i + '-' + movie.title}
                            movie={movie}
                        />
                    ))}
                </div>
            </section>
        </Layout>
    )
}
