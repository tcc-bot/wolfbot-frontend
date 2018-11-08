import axios from 'axios'
import api from '../config/config-localhost'

export function getSaldo(USER_BOT) {
  if (USER_BOT.id === undefined) {
    return {
      type: 'SALDO_NOT_FETCHED'
    }
  } else {
    const request = axios.get(`${api.WOLFBOT_API_URL}/exchanges/saldo?id_usuario=${USER_BOT.id}`,
      { headers: { authorization: USER_BOT.Token } })

    return {
      type: 'SALDO_FETCHED',
      payload: request
    }
  }
}
