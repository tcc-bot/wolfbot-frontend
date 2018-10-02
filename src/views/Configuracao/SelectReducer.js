const INITIAL_STATE = {
  data: [{ value: 'Bittrex', label: 'Bittrex' }],
  exchangeSelected: { value: '', label: '' }
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'EXCHANGES_FETCHED': {
      return { ...state, data: action.payload.data }
    }
    case 'EXCHANGE_SELECTED': {
      return { ...state, exchangeSelected: action.payload }
    }
    default:
      return state
  }
}
