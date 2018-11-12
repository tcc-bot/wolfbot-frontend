import axios from 'axios'
import api from '../config/config-localhost'
import { toastr } from 'react-redux-toastr'

export function ChangeTabPerfil(tab) {
  return {
    type: 'CHANGED_TAB_PERFIL',
    payload: tab
  }
}

export function getDadosPessoais(token) {
  const url = `${api.WOLFBOT_API_URL}/profile`;
  return dispatch => {
    axios.get(url, { headers: { authorization: token } })
      .then(resp => {
        dispatch({ type: 'GET_DADOS_PESSOAIS', payload: resp.data })
      })
      .catch(e => {
        for (var i = 0; i < e.response.data.errors.length; i++) {
          toastr.error('Erro', e.response.data.errors[i].message)
        }
      })
  }
}

export function getCountries(token) {
  const url = `${api.WOLFBOT_API_URL}/countries`;
  return dispatch => {
    axios.get(url, { headers: { authorization: token } })
      .then(resp => {
        dispatch({
          type: 'GET_COUNTRIES',
          payload: resp.data.map(country => (new Object({ label: country.countryName, value: country.countryName })))
        })
      })
  }
}

export function salvar(perfil, token) {
  const url = `${api.WOLFBOT_API_URL}/profile`;
  return dispatch => {
    axios.put(url, perfil, { headers: { authorization: token } })
      .then(resp => {
        dispatch({ type: 'GET_DADOS_PESSOAIS', payload: resp.data }),
          toastr.success("Ok", "Suas informações foram salvas")
      })
      .catch(e => {
        for (var i = 0; i < e.response.data.errors.length; i++) {
          toastr.error('Erro', e.response.data.errors[i].message)
        }
      })
  }
}

export function alterarSenha(data, token) {
  const url = `${api.WOLFBOT_API_URL}/changePassword`;
  const obj = {
    password: !data.password ? '' : data.password,
    newPassword: !data.newPassword ? '' : data.newPassword,
    confirmNewPassword: !data.confirmNewPassword ? '' : data.confirmNewPassword
  }
  return dispatch => {
    axios.put(url, obj, { headers: { authorization: token } })
      .then(resp => {
        dispatch({ type: 'CHANGE_PASSWORD', payload: true }),
          toastr.success("Sucesso", "Senha Alterada")
      })
      .catch(e => {
        for (var i = 0; i < e.response.data.errors.length; i++) {
          toastr.error('Erro', e.response.data.errors[i].message)
        }
      })
  }
}
