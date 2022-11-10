import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

interface Props {
    children: ReactNode
}
export default function Layout({ children }: Props) {
    return (
        <section>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </section>
    )
}
