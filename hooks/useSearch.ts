import { searchMovie } from '@/stateManagement/redux/slices'
import { ChangeEventHandler, useEffect, useState } from 'react'
import { useAppDispatch } from './useAppDispatch'

export const useSearch = () => {
    const [input, setInput] = useState<string>('')
    const dispatch = useAppDispatch()
    const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
        const { value } = e.target
        setInput(value)
    }
    useEffect(() => {
        dispatch(searchMovie(input))
    }, [input])
    return { input, handleChange }
}
