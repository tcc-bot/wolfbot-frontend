var exchangeBot;
if (localStorage.getItem('exchange_bot') != 'undefined') {
  exchangeBot = JSON.parse(localStorage.getItem('exchange_bot'));
}
else {
  exchangeBot = '';
}

const INITIAL_STATE = {
  exchange: exchangeBot,
  roboLigado: false
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EXCHANGE_FETCHED':
      localStorage.setItem('exchange_bot', JSON.stringify(action.payload.data))
      return { ...state, exchange: action.payload.data }
    case 'LIGAR_ROBO':
      return { ...state, roboLigado: action.payload }
    default:
      return state
  }
}
