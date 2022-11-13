import { API_URL } from '@/constants'
import axios from 'axios'

export const tomatoes = axios.create({
    baseURL: API_URL
})
