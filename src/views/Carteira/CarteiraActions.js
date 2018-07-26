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

export function getSaldo() {
    const USER_BOT = loadLocalStorage('user_bot')
    const EXCHANGE_BOT = loadLocalStorage('exchange_bot')
    const id_usuario = USER_BOT.id
    const id_exchange = EXCHANGE_BOT.id_exchange
    const request = axios.get(`${BASE_URL}/bittrex/saldo?id_usuario=${id_usuario}&id_exchange=${id_exchange}`)

    /*const saldo = request.data.info.filter(function(e){
        if(e.Balance > 0){
            return e
        }
    })*/

    //console.log(saldo)

    return {
        type: 'SALDO_FETCHED',
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

