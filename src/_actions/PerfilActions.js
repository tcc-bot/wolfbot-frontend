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
          toastr.success("Suas informações foram salvas")
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
  return dispatch => {
    axios.put(url, { password: data.newPassword }, { headers: { authorization: token } })
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

export function validaAlteraçãoSenha(data) {
  if (!data.password || !data.newPassword || !data.confirmNewPassword) {
    return {
      type: 'CHANGE_PASSWORD_EMPTY_VALUES',
      payload: {
        password: (!data.password) ? 'Informe a senha atual' : ''
        , newPassword: (!data.newPassword) ? 'Informe a nova senha' : ''
        , confirmNewPassword: (!data.confirmNewPassword) ? 'Informe a confirmação da nova senha' : ''
        , changePasswordSuccess: false
      }
    }
  }
  else if (data.confirmNewPassword !== data.newPassword) {
    return dispatch => {
      toastr.error('Erro', 'A nova senha e a senha de confirmação não conferem'),
        dispatch({ type: 'CHANGE_PASSWORD_SUCCESS_OK', payload: false })
    }
  }
  else {
    return { type: 'CHANGE_PASSWORD_SUCCESS', payload: true }
  }
}

export function resetAlteracaoSenha() {
  return { type: 'RESET_ALTERACAO_SENHA_PAGE', payload: false }
}
