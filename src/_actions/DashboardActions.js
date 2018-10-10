import axios from 'axios'
import api from '../config/config-production'

export function getExchange () {
  const USER_BOT = loadLocalStorage('user_bot')
  const request = axios.get(`${api.WOLFBOT_API_URL}/configuracao/carregar?user_id=${USER_BOT.id}`)

  return {
    type: 'EXCHANGE_FETCHED',
    payload: request
  }
}

export function ligarRobo (statusRobo) {
  if (statusRobo == false) {
    axios.post(`${api.WOLFBOT_API_URL}/bot/acionarRobo?chave=teste&status=on`)
  }
  if (statusRobo == true) {
    axios.post(`${api.WOLFBOT_API_URL}/bot/acionarRobo?chave=teste&status=off`)
  }
  return {
    type: 'LIGAR_ROBO',
    payload: !statusRobo
  }
}

function loadLocalStorage (key) {
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
