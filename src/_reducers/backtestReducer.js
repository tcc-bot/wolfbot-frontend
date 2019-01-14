const INITIAL_STATE = {

  exchanges: [
    { 'value': 'bittrex', 'label': 'bittrex' },
    { 'value': 'bitfinex', 'label': 'bitfinex' },
    { 'value': 'poloniex', 'label': 'poloniex' }
  ],
  currencies: [
    { 'value': 'BTC', 'label': 'BTC' },
    { 'value': 'ETH', 'label': 'ETH' },
    { 'value': 'BCH', 'label': 'BCH' }
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
    { 'value': 'CCI', 'label': 'CCI' },
    { 'value': 'BOLLINGER BANDS', 'label': 'BOLLINGER BANDS' }
  ],
  result: 'teste'
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'RESULT_FETCHED':
      return { ...state, result: action.payload }
    default:
      return state
  }
}
