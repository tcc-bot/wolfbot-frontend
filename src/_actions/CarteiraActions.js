import axios from 'axios'
import api from '../config/config-development'

export function getSaldo() {
  const USER_BOT = loadLocalStorage('user_bot')
  //const EXCHANGE_BOT = loadLocalStorage('exchange_bot')
  const id_usuario = USER_BOT.id
  //const id_exchange = ''//EXCHANGE_BOT.id_exchange

  if (id_usuario === '') {
    return {
      type: 'SALDO_NOT_FETCHED'
    }
  } else {
    const request = axios.get(`${api.WOLFBOT_API_URL}/exchanges/saldo?id_usuario=${id_usuario}`)

    return {
      type: 'SALDO_FETCHED',
      payload: request
    }
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

