import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import ambiente from '../config-ambiente'
import functions from '../helpers/functions'

const USER_BOT = functions.loadLocalStorage('user_bot')

export function testarStrategy (values) {
  const url = `${ambiente.URL.api}/backtest/testarConfiguracao`
  return dispatch => {
    axios.post(url, values, { headers: { authorization: USER_BOT.Token } })
      .then(resp =>
        dispatch(
          { type: 'RESULT_FETCHED', payload: resp.data.data }
        )
      )
      .catch(e => {
        for (var i = 0; i < e.response.data.errors.length; i++) {
          toastr.error('Erro', e.response.data.errors[i].message)
          console.log(e.response.data.errors[i].message)
        }
      })
  }
}
