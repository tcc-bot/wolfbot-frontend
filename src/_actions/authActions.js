import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../config/config-development'
import { history } from '../helpers/history'


export function login(values) {
  const url = `${consts.ACCOUNT_WOLFBOT_URL}/login`
  return dispatch => {
    axios.post(url, values)
      .then(resp =>
        dispatch(
          { type: 'USER_FETCHED', payload: resp.data }
        )
      )
      .catch(e => {
        for (var i = 0; i < e.response.data.errors.length; i++) {
          toastr.error("Erro", e.response.data.errors[i].message);
        }
      })
  }
}
export function signup(values) {
  const url = `${consts.ACCOUNT_WOLFBOT_URL}/signup`

  return dispatch => {
    axios.post(url, values)
      .then(resp => {
        dispatch(
          { type: 'REGISTER_SUCCESS', payload: resp.data },
        )
      })
      .catch(e => {
        for (var i = 0; i < e.response.data.errors.length; i++) {
          toastr.error("Erro", e.response.data.errors[i].message);
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
      axios.get(`${consts.ACCOUNT_WOLFBOT_URL}/validateToken`, { headers: { Authorization: token } })
        .then(resp => {
          dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.valid })
        })
        .catch(e => dispatch({ type: 'TOKEN_VALIDATED', payload: false }))
    } else {
      dispatch({ type: 'TOKEN_VALIDATED', payload: false })
    }
  }
}

export function passwordRecovery(email) {
  return dispatch => {
    axios.post(`${consts.ACCOUNT_WOLFBOT_URL}/passwordrecovery`, email)
      .then(resp => {
        dispatch({ type: 'PASSWORD_RECOVERY', payload: resp.data.valid }
          , toastr.success('Sucesso', 'O Email para redefinição de senha foi enviado!')
        )
      })
      .catch(e => toastr.error("Erro", e.response.data.errors.message))
  }
}

export function loadLoginPage() {
  return { type: 'PAGE_LOGIN_UPDATED', payload: false }
}

export function loadSession() {
  const USER_BOT = loadLocalStorage('user_bot');
  return { type: 'LOAD_SESSSION_USER', payload: USER_BOT }
}

export function loadChangePasswordPage(parameter) {
  const objChangePassword = {
    changepasswordhash: parameter
  };
  return dispatch => {
    axios.post(`${consts.ACCOUNT_WOLFBOT_URL}/changepasswordpermition`, objChangePassword)
      .then(resp => {
        const obj = {
          success: resp.data.success,
          hash: resp.data.hash
        }
        dispatch({ type: 'CHANGE_PASSWORD_CONFIRM', payload: obj }
          , toastr.success("Sucesso", "Realize a alteração da senha"))
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
  };
  return dispatch => {
    axios.post(`${consts.ACCOUNT_WOLFBOT_URL}/changepassword`, objChangePassword)
      .then(resp => {
        dispatch({ type: 'PASSWORD_CHANGED', payload: resp.data.success }
          , toastr.success('Sucesso', resp.data.message))
      })
      .catch(e => {
        for (var i = 0; i < e.response.data.errors.length; i++) {
          toastr.error("Erro", e.response.data.errors[i].message);
        }
      })
  }
}

export function ativarConta(activeAccountHash) {
  return dispatch => {
    axios.post(`${consts.ACCOUNT_WOLFBOT_URL}/active`, { activeAccountHash: activeAccountHash })
      .then(resp => {
        dispatch({ type: 'ACCOUNT_ACTIVE', payload: true }
          , toastr.success('Sucesso', 'Sua Conta foi Ativada'))
      })
      .catch(e => {
        toastr.error("Erro", e.response.data.errors[0].message);
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
  }
  catch (err) {
    return ''
  }
}
