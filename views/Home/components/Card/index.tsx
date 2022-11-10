import Image from 'next/image'
import { Movie } from '../../types/models'

interface Props {
    movie: Movie
}
export default function Card({ movie }: Props) {
    return (
        <div className="relative overflow-hidden">
            <Image
                width={movie.width}
                height={movie.height}
                src={movie.img}
                alt={movie.title}
            />
            <div className="absolute bg-[rgba(0,0,0,0.8)] w-full h-full top-[85%] p-2 flex flex-col gap-2 ">
                <p className="text-white font-bold ">{movie.title}</p>
                <p className="text-white font-light ">{movie.year}</p>
                <p className="text-white">{movie.description}</p>
            </div>
        </div>
    )
}
