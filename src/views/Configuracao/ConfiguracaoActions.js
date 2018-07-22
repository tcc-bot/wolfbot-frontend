import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const BASE_URL = 'http://localhost:8080'

export function getExchanges() {
    const request = axios.get(`${BASE_URL}/exchange`)
    
    return {
        type: 'EXCHANGES_FETCHED',
        payload: request

    }
}

export function salvarConfiguracao(values) {
    const url = `${BASE_URL}/exchangeTokens`
    
    return dispatch => {
        axios.post(url, values)
          .then(resp =>
            dispatch(
              { type: 'CONFIGURATION_SAVED', payload: resp.data }
            )
          )
          .catch(e => {
            for (var i = 0; i < e.response.data.errors.length; i++) {
              toastr.error("Erro", e.response.data.errors[i].message);
            }
          })
      }
}