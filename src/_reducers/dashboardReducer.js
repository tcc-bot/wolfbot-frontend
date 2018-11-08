const INITIAL_STATE = {
  roboLigado: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LIGAR_ROBO':
      return { ...state, roboLigado: action.payload }
    default:
      return state
  }
}
