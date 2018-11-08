const INITIAL_STATE = {
  roboLigado: false,
  openOrders: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'OPEN_ORDERS_FETCHED':
      return { ...state, openOrders: action.payload.data }
    case 'LIGAR_ROBO':
      return { ...state, roboLigado: action.payload }
    default:
      return state
  }
}
