import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const BASE_URL = 'http://localhost:8080'

export function getExchange(){
    const USER_BOT = loadLocalStorage('user_bot')
    const request = axios.get(`${BASE_URL}/exchangeTokens?id_usuario=${USER_BOT.id}`)
    return{
        type: 'EXCHANGE_FETCHED',
        payload: request
    }
}

function loadLocalStorage(key) {
    try {
        const serializedState = localStorage.getItem(key)
        if (serializedState === null) {
            return ''
        }
        return JSON.parse(serializedState)
    }
    catch (err) {
        return ''
    }
}