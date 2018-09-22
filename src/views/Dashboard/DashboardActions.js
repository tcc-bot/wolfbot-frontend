import axios from 'axios'

const BASE_URL = 'http://localhost:8080'

export function getExchange() {
  const USER_BOT = loadLocalStorage('user_bot')
  const request = axios.get(`${BASE_URL}/configuracao/carregar?user_id=${USER_BOT.id}`)

  return {
    type: 'EXCHANGE_FETCHED',
    payload: request
  }
}

export function ligarRobo(statusRobo) {
  if(statusRobo == false){
    axios.post(`${BASE_URL}/bot/acionarRobo?chave=teste&status=on`)
  }
  if(statusRobo == true){
    axios.post(`${BASE_URL}/bot/acionarRobo?chave=teste&status=off`)
  }
  return {
    type: 'LIGAR_ROBO',
    payload: !statusRobo
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
