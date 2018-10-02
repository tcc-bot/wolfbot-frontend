import axios from 'axios'

const BASE_URL = 'http://localhost:8080'

export function getSaldo() {
  const USER_BOT = loadLocalStorage('user_bot')
  const id_usuario = USER_BOT.id

  if (id_usuario === '') {
    return {
      type: 'SALDO_NOT_FETCHED'
    }
  } else {
    const request = axios.get(`${BASE_URL}/api/exchanges/saldo?id_usuario=${id_usuario}`)

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
  } catch (err) {
    return ''
  }
}
