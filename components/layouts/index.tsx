import { ReactNode } from 'react'
import Header from './Header'

interface Props {
    children: ReactNode
}
export default function Layout({ children }: Props) {
    return (
        <section>
            <Header />
            <main>{children}</main>
        </section>
    )
}
