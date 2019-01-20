import axios from 'axios'
import ambiente from '../config-ambiente'
import functions from '../helpers/functions'

const USER_BOT = functions.loadLocalStorage('user_bot')

export function ligarRobo (statusRobo) {
  if (statusRobo === false) {
    axios.post(`${ambiente.URL.api}/bot/acionarRobo`,
      { chave: 'teste', status: 'on' },
      { headers: { authorization: USER_BOT.Token } })
  }
  if (statusRobo === true) {
    axios.post(`${ambiente.URL.api}/bot/acionarRobo?chave=teste&status=off`,
      { chave: 'teste', status: 'on' },
      { headers: { authorization: USER_BOT.Token } })
  }

  return {
    type: 'LIGAR_ROBO',
    payload: !statusRobo
  }
}
