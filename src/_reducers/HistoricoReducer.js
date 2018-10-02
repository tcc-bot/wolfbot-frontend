const INITIAL_STATE = {
  historicos: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LISTAR_HISTORICO':
      return { ...state, historicos: action.payload }
    default:
      return state
  }
}
