import axios from 'axios'
import api from '../config/config-localhost'
import functions from '../helpers/functions'

const USER_BOT = functions.loadLocalStorage('user_bot')

export function getSaldo() {
  const id_usuario = USER_BOT.id

  if (id_usuario === '') {
    return {
      type: 'SALDO_NOT_FETCHED'
    }
  } else {
    const request = axios.get(`${api.WOLFBOT_API_URL}/exchanges/saldo?id_usuario=${id_usuario}`,
      { headers: { authorization: USER_BOT.Token } })

    return {
      type: 'SALDO_FETCHED',
      payload: request
    }
  }
}
