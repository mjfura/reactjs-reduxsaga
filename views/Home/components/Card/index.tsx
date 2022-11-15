import Image from 'next/image'
import { Movie } from '../../types/models'

interface Props {
    movie: Movie
}
export default function Card({ movie }: Props) {
    return (
        <div className="relative group overflow-hidden">
            <Image
                className="peer"
                width={movie.width}
                height={movie.height}
                src={movie.img}
                alt={movie.title}
            />
            <div className="absolute bg-[rgba(0,0,0,0.8)] w-full bottom-0 p-2 flex flex-col gap-2 ">
                <p className="text-white font-bold ">{movie.title}</p>
            </div>
            <div
                className={`absolute bg-[rgba(0,0,0,0.8)] w-full top-full transition-all ease-in-out duration-300 group-hover:-translate-y-full p-2 flex flex-col gap-2 `}
            >
                <p className="text-white font-bold">{movie.title}</p>
                <p className="text-white ">{movie.year}</p>
                <p className="text-white text-sm">{movie.description}</p>
            </div>
        </div>
    )
}
