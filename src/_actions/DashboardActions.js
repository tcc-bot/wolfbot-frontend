import axios from 'axios'
import api from '../config/config-localhost'
import functions from '../helpers/functions'

const USER_BOT = functions.loadLocalStorage('user_bot');

export function ligarRobo(statusRobo) {
  if (statusRobo == false) {
    axios.post(`${api.WOLFBOT_API_URL}/bot/acionarRobo`,
      { chave: 'teste', status: 'on' },
      { headers: { authorization: USER_BOT.Token } })
  }
  if (statusRobo == true) {
    axios.post(`${api.WOLFBOT_API_URL}/bot/acionarRobo?chave=teste&status=off`,
      { chave: 'teste', status: 'on' },
      { headers: { authorization: USER_BOT.Token } })
  }

  return {
    type: 'LIGAR_ROBO',
    payload: !statusRobo
  }
}
