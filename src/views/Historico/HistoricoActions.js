import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const BASE_URL = 'http://localhost:8080'

export function listarHistorico() {
  const USER_BOT = loadLocalStorage('user_bot')
  return dispatch => {
    axios.get(`${BASE_URL}/api/historicos`)
      .then(resp => {
        const historicos = resp.data.data
        dispatch({ type: 'LISTAR_HISTORICO', payload: historicos })
      })
      .catch(e => toastr.error('Erro', e.response.data.errors.message))
  }
};

export function buscarHistorico(values) {
  const USER_BOT = loadLocalStorage('user_bot')
  return dispatch => {
    axios.get(`${BASE_URL}/api/historicos`)
      .then(resp => {
        const historicos = resp.data.data
        dispatch({ type: 'LISTAR_HISTORICO', payload: historicos })
      })
      .catch(e => toastr.error('Erro', e.response.data.errors.message))
  }
}

function loadLocalStorage(key) {
  try {
    const serializedState = localStorage.getItem(key)
    if (serializedState === null) {
      return ''
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return ''
  }
}

//  { headers: { Authorization: USER_BOT.token } }
