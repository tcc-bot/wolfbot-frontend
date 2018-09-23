const exchangeKey = 'exchange_bot'
const INITIAL_STATE = {
  exchange: '', // JSON.parse(localStorage.getItem(exchangeKey)),
  roboLigado: false
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EXCHANGE_FETCHED':
      console.log(action.payload.data.configuracao.exchange)
      localStorage.setItem(exchangeKey, JSON.stringify(action.payload.data.configuracao.exchange))
      return { ...state, exchange: action.payload.data.configuracao.exchange }
    case 'LIGAR_ROBO':
      return { ...state, roboLigado: action.payload }
    default:
      return state
  }
}
