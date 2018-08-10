const exchangeKey = 'exchange_bot'
const INITIAL_STATE = {
  exchange: JSON.parse(localStorage.getItem(exchangeKey))
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EXCHANGE_FETCHED':
      localStorage.setItem(exchangeKey, JSON.stringify(action.payload.data))
      return { ...state, exchange: action.payload.data }
    default:
      return state
  }
}