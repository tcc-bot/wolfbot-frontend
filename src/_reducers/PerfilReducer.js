const INITIAL_STATE = {
  profile: false,
  tab_perfil: 'dados_pessoais'
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGED_TAB_PERFIL':
      return { ...state, tab_perfil: action.payload }
    default:
      return state
  }
}
