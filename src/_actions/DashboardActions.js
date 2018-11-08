import axios from 'axios'
import api from '../config/config-localhost'
import functions from '../helpers/functions'
import { func } from 'prop-types';

const USER_BOT = functions.loadLocalStorage('user_bot');

export function getOpenOrdersByUser(user_bot) {
  if (user_bot.id !== undefined) {
    const request = axios.get(
      `${api.WOLFBOT_API_URL}/order/open?user_id=${user_bot.id}`,
      { headers: { authorization: user_bot.Token } }
    )
    return {
      type: 'OPEN_ORDERS_FETCHED',
      payload: request
    }
  }
}

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
