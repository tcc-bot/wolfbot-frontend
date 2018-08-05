import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../../../_consts/const'
import { history } from '../../../_helpers/history'


export function login(values) {
  const url = `${consts.OAPI_URL_LOCALHOST}/login`
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
  const url = `${consts.OAPI_URL_LOCALHOST}/signup`

  return dispatch => {
    axios.post(url, values)
      .then(resp =>
        dispatch(
          { type: 'USER_FETCHED', payload: resp.data },
          history.push('/'),
          toastr.success('Sucesso', 'Usuário registrado com sucesso')

        )
      )
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
      axios.get(`${consts.OAPI_URL_LOCALHOST}/validateToken`, { headers: { token } })
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
    axios.post(`${consts.OAPI_URL_LOCALHOST}/passwordrecovery`, email)
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

export function loadChangePasswordPage(parameter) {
  const objChangePassword = {
    changepasswordhash: parameter
  };
  return dispatch => {
    axios.post(`${consts.OAPI_URL_LOCALHOST}/changepasswordpermition`, objChangePassword)
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
    axios.post(`${consts.OAPI_URL_LOCALHOST}/changepassword`, objChangePassword)
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
