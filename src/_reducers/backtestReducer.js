const INITIAL_STATE = {
  currencies: [
    { 'value': 'BTC/USDT', 'label': 'BTC/USDT' },
    { 'value': 'ETH/USDT', 'label': 'ETH/USDT' },
    { 'value': 'BCH/USDT', 'label': 'BCH/USDT' }
  ],
  candle: [
    { 'value': '5m', 'label': '5m' },
    { 'value': '30m', 'label': '30m' },
    { 'value': '1h', 'label': '1h' },
    { 'value': '1d', 'label': '1d' }
  ],
  indicators: [
    { 'value': 'MACD', 'label': 'MACD' },
    { 'value': 'EMA', 'label': 'EMA' },
    { 'value': 'STOCH', 'label': 'STOCH' },
    { 'value': 'CCI', 'label': 'CCI' }
  ]
}

export default function (state = INITIAL_STATE, action) {
  return state
  // switch (action.type) {
  //     case 'MOEDA_SELECTED': {
  //         return { ...state, currenciesSelected: action.payload }
  //     }
  //     default:
  //         return state
  // }
}
