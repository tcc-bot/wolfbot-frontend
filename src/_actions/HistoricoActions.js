import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import ambiente from '../config-ambiente'
import functions from '../helpers/functions'

export function listarHistorico () {
  const USER_BOT = functions.loadLocalStorage('user_bot')
  return dispatch => {
    axios.get(`${ambiente.URL.api}/historicos`,
      { headers: { authorization: USER_BOT.Token } })
      .then(resp => {
        const historicos = resp.data.data
        dispatch({ type: 'LISTAR_HISTORICO', payload: historicos })
      })
      .catch(e => toastr.error('Erro', e.response.data.errors.message))
  }
};

export function buscarHistorico (values) {
  const USER_BOT = functions.loadLocalStorage('user_bot')
  return dispatch => {
    axios.get(`${ambiente.URL.api}/historicos`,
      { headers: { authorization: USER_BOT.Token } })
      .then(resp => {
        const historicos = resp.data.data
        dispatch({ type: 'LISTAR_HISTORICO', payload: historicos })
      })
      .catch(e => toastr.error('Erro', e.response.data.errors.message))
  }
}
