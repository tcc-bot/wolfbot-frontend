import axios from 'axios'
const BASE_URL = 'http://localhost:8080/exchange'

export function getExchanges() {
    const request = axios.get(BASE_URL)
    
    return {
        type: 'EXCHANGES_FETCHED',
        payload: request

    }
}