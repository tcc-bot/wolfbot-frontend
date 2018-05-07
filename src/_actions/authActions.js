import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../_consts/const'
import { history } from '../_helpers/history'


export function login(values) {
    const url = `${consts.OAPI_URL}/login`
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
    const url = `${consts.OAPI_URL}/signup`

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
            axios.post(`${consts.OAPI_URL}/validateToken`, { token })
                .then(resp => {
                    dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.valid })
                })
                .catch(e => dispatch({ type: 'TOKEN_VALIDATED', payload: false }))
        } else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false })
        }
    }
}