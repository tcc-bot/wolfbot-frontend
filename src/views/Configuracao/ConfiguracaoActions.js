import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const BASE_URL = 'http://localhost:8080'


export function getExchanges() {
  const request = axios.get(`${BASE_URL}/exchanges/loadExchanges`)

  return {
    type: 'EXCHANGES_FETCHED',
    payload: request

  }
}

export function ExchangeSelectOption(selectOption) {
  return {
    type: 'EXCHANGE_SELECTED',
    payload: {
      value: selectOption.value,
      label: selectOption.label
    }
  }
}

export function CandlesSelectOption(selectOption) {
  return {
    type: 'CANDLE_SELECTED',
    payload: {
      value: selectOption.value,
      label: selectOption.label
    }
  }
}

export function MoedasSelectOption(selectOption) {
  return {
    type: 'MOEDA_SELECTED',
    payload: {
      value: selectOption.value,
      label: selectOption.label
    }
  }
}

export function IndicadoresSelectOption(selectOption) {
  return {
    type: 'INDICADOR_SELECTED',
    payload: {
      value: selectOption.value,
      label: selectOption.label
    }
  }
}

export function salvarConfiguracao(values) {
  const url = `${BASE_URL}/configuracao`

  return dispatch => {
    axios.post(url, values)
      .then(resp =>
        dispatch(
          { type: 'CONFIGURATION_SAVED', payload: resp.data },
          toastr.success('Sucesso', 'Configuração salva com sucesso!')
        )
      )
      .catch(e => {
        for (var i = 0; i < e.response.data.errors.length; i++) {
          toastr.error("Erro", e.response.data.errors[i].message);
        }
      })
  }
}

export function salvarEstrategia(values) {
  const url = `${BASE_URL}/configuracao`

  return dispatch => {
    axios.post(url, values)
      .then(resp =>
        dispatch(
          { type: 'CONFIGURATION_SAVED', payload: resp.data },
          toastr.success('Sucesso', 'Configuração salva com sucesso!')
        )
      )
      .catch(e => {
        for (var i = 0; i < e.response.data.errors.length; i++) {
          toastr.error("Erro", e.response.data.errors[i].message);
        }
      })
  }
}
