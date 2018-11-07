import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import api from '../config/config-localhost'
import functions from '../helpers/functions'

export function listarHistorico() {
  const USER_BOT = functions.loadLocalStorage('user_bot')
  return dispatch => {
    axios.get(`${api.WOLFBOT_API_URL}/historicos`,
      { headers: { authorization: USER_BOT.Token } })
      .then(resp => {
        const historicos = resp.data.data
        dispatch({ type: 'LISTAR_HISTORICO', payload: historicos })
      })
      .catch(e => toastr.error('Erro', e.response.data.errors.message))
  }
};

export function buscarHistorico(values) {
  const USER_BOT = functions.loadLocalStorage('user_bot')
  return dispatch => {
    axios.get(`${api.WOLFBOT_API_URL}/historicos`,
      { headers: { authorization: USER_BOT.Token } })
      .then(resp => {
        const historicos = resp.data.data
        dispatch({ type: 'LISTAR_HISTORICO', payload: historicos })
      })
      .catch(e => toastr.error('Erro', e.response.data.errors.message))
  }
}
