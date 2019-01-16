import axios from 'axios'
 import ambiente from '../config-ambiente'

export function getSaldo (USER_BOT) {  
  if (USER_BOT.id === undefined) {
    return {
      type: 'SALDO_NOT_FETCHED'
    }
  } else {
    const request = axios.get(`${ambiente.URL.api}/exchanges/saldo?user_id=${USER_BOT.id}`,
      { headers: { authorization: USER_BOT.Token } })

    return {
      type: 'SALDO_FETCHED',
      payload: request
    }
  }
}
