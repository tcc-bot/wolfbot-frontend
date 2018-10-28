import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import api from '../config/config-localhost'
import { history } from '../helpers/history'

export function login(values) {
  const url = `${api.ACCOUNT_WOLFBOT_URL}/login`
  return dispatch => {
    axios.post(url, values)
      .then(resp =>
        dispatch(
          { type: 'USER_FETCHED', payload: resp.data }
        )
      )
      .catch(e => {
        for (var i = 0; i < e.response.data.errors.length; i++) {
          toastr.error('Erro', e.response.data.errors[i].message)
        }
      })
  }
}

export function signup(values) {
  const url = `${api.ACCOUNT_WOLFBOT_URL}/signup`

  return dispatch => {
    axios.post(url, values)
      .then(resp => {
        dispatch(
          { type: 'REGISTER_SUCCESS', payload: resp.data }
        )
      })
      .catch(e => {
        for (var i = 0; i < e.response.data.errors.length; i++) {
          toastr.error('Erro', e.response.data.errors[i].message)
        }
      })
  }
}

export function logout() {
  return { type: 'TOKEN_VALIDATED', payload: false }
}

export function validateToken(token) {
  return dispatch => {
    if (token) {
      axios.get(`${api.ACCOUNT_WOLFBOT_URL}/me`, { headers: { token: token } })
        .then(resp => {
          dispatch({ type: 'TOKEN_VALIDATED', payload: true })
        })
        .catch(e => dispatch({ type: 'TOKEN_VALIDATED', payload: false }))
    } else {
      dispatch({ type: 'TOKEN_VALIDATED', payload: false })
    }
  }
}

export function passwordRecovery(email) {
  return dispatch => {
    axios.post(`${api.ACCOUNT_WOLFBOT_URL}/passwordrecovery`, email)
      .then(resp => {
        dispatch({ type: 'PASSWORD_RECOVERY', payload: resp.data.valid }
          , toastr.success('Sucesso', 'O Email para redefinição de senha foi enviado!')
        )
      })
      .catch(e => toastr.error('Erro', e.response.data.errors.message))
  }
}

export function loadLoginPage() {
  return { type: 'PAGE_LOGIN_UPDATED', payload: false }
}

export function loadSession() {
  const USER_BOT = loadLocalStorage('user_bot')
  return { type: 'LOAD_SESSSION_USER', payload: USER_BOT }
}

export function loadChangePasswordPage(parameter) {
  const objChangePassword = {
    changepasswordhash: parameter
  }
  return dispatch => {
    axios.post(`${api.ACCOUNT_WOLFBOT_URL}/changepasswordpermition`, objChangePassword)
      .then(resp => {
        const obj = {
          success: resp.data.success,
          hash: resp.data.hash
        }
        dispatch({ type: 'CHANGE_PASSWORD_CONFIRM', payload: obj }
          , toastr.success('Sucesso', 'Realize a alteração da senha'))
      })
      .catch(e => {
        dispatch({ type: 'CHANGE_PASSWORD_DENIED', payload: e.response.data })
      })
  }
}

export function changePassword(values, changePasswordHash) {
  const objChangePassword = {
    password: values.password,
    passwordConfirm: values.passwordConfirm,
    changePasswordHash: changePasswordHash
  }
  return dispatch => {
    axios.post(`${api.ACCOUNT_WOLFBOT_URL}/changepassword`, objChangePassword)
      .then(resp => {
        dispatch({ type: 'PASSWORD_CHANGED', payload: resp.data.success }
          , toastr.success('Sucesso', resp.data.message))
      })
      .catch(e => {
        for (var i = 0; i < e.response.data.errors.length; i++) {
          toastr.error('Erro', e.response.data.errors[i].message)
        }
      })
  }
}

// Action que é chamada quando o usuário clica no link para ativar a conta
export function verifiyActiveAccount(code) {
  return dispatch => {
    axios.get(`${api.ACCOUNT_WOLFBOT_URL}/active`, { headers: { code: code } })
      .then(resp => {
        dispatch({ type: 'ACCOUNT_ACTIVE', payload: true })
      })
      .catch(e => {
        dispatch({ type: 'ACCOUNT_ACTIVE', payload: false })
      })
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
