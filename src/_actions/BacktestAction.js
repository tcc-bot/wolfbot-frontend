import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import api from '../config/config-development'

export function testarStrategy(values) {
    const url = `${api.WOLFBOT_API_URL}/backtest/testarConfiguracao`
    return dispatch => {
        axios.post(url, values)
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