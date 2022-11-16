import logo from '@/assets/svgs/logo.svg'
import searchIcon from '@/assets/svgs/search.svg'
import { useSearch } from '@/hooks'
import Image from 'next/image'
export default function Header() {
    const { handleChange, input } = useSearch()
    return (
        <header className="flex flex-col ">
            <div className="bg-black px-20 py-2 ">
                <Image
                    src={logo}
                    alt="logo tomatoes"
                />
            </div>
            <nav className="bg-primary flex px-20 py-4">
                <div className="flex flex-1 relative ">
                    <Image
                        className="absolute left-4 top-2 "
                        src={searchIcon}
                        alt="icon search tomatoes"
                    />
                    <input
                        onChange={handleChange}
                        value={input}
                        name="searcher"
                        placeholder="Title"
                        className="flex flex-1 rounded py-2 px-12"
                        type="search"
                    />
                </div>
            </nav>
        </header>
    )
}
