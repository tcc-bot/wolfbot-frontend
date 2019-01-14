const INITIAL_STATE = {

  exchanges: [{ value: '', label: '' }],
  periodos: [
    {
      'value': '50',
      'label': '50'
    }
  ],
  candles: [
    {
      'value': '5m',
      'label': '5m'
    },
    {
      'value': '10m',
      'label': '10m'
    },
    {
      'value': '15m',
      'label': '15m'
    },
    {
      'value': '30m',
      'label': '30m'
    },
    {
      'value': '1h',
      'label': '1h'
    },
    {
      'value': '2h',
      'label': '2h'
    },
    {
      'value': '5h',
      'label': '5h'
    },
    {
      'value': '1d',
      'label': '1d'
    }
  ],
  moedas: [
    {
      'value': 'BTC/USDT',
      'label': 'BTC/USDT'
    }
  ],
  indicadores: [
    {
      'value': 'MACD',
      'label': 'MACD'
    }],

  exchangeSelected: { value: '', label: '' },
  periodoSelected: { value: '', label: '' },
  candlesSelected: { value: '', label: '' },
  moedasSelected: { value: '', label: '' },
  indicadoresSelected: { value: '', label: '' }

}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'EXCHANGES_FETCHED': {
      return { ...state, exchanges: action.payload.data.data }
    }
    case 'EXCHANGE_SELECTED': {
      return { ...state, exchangeSelected: action.payload }
    }
    case 'PERIODO_SELECTED': {
      return { ...state, periodoSelected: action.payload }
    }
    case 'CANDLE_SELECTED': {
      return { ...state, candlesSelected: action.payload }
    }
    case 'MOEDA_SELECTED': {
      return { ...state, moedasSelected: action.payload }
    }
    case 'INDICADOR_SELECTED': {
      return { ...state, indicadoresSelected: action.payload }
    }
    default:
      return state
  }
}
