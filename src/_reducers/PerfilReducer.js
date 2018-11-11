const INITIAL_STATE = {
  profile: false,
  tab_perfil: 'dados_pessoais',
  dadosPessoais: '',
  userName: '',
  userPhoto: '',
  genreSelect: [
    {
      "value": "Masculino",
      "label": "Masculino"
    },
    {
      "value": "Feminino",
      "label": "Feminino"
    }
  ],
  genreSelected: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGED_TAB_PERFIL':
      return { ...state, tab_perfil: action.payload }
    case 'GET_DADOS_PESSOAIS':
      return { ...state, dadosPessoais: action.payload, userName: action.payload.name, userPhoto: action.payload.photo }
    case 'GET_DADOS_HEADER':
      return { ...state, userName: action.payload.name, userPhoto: action.payload.photo }
    case 'GENRE_SELECTED':
      return { ...state, genreSelected: action.payload }
    default:
      return state
  }
}
