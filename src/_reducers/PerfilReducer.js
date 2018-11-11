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
  genreSelected: '',
  countriesSelect: [],
  countrySelected: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGED_TAB_PERFIL':
      return { ...state, tab_perfil: action.payload }
    case 'GET_DADOS_PESSOAIS':
      return {
        ...state, dadosPessoais: action.payload,
        userName: action.payload.name,
        userPhoto: action.payload.photo,
        countrySelected: { value: action.payload.country, label: action.payload.country },
        genreSelected: { value: action.payload.genre, label: action.payload.genre }
      }
    case 'GET_DADOS_HEADER':
      return { ...state, userName: action.payload.name, userPhoto: action.payload.photo }
    case 'GENRE_SELECTED':
      return { ...state, genreSelected: action.payload }
    case 'GET_COUNTRIES':
      return { ...state, countriesSelect: action.payload }
    case 'COUNTRY_SELECTED':
      return { ...state, countrySelected: action.payload, }
    default:
      return state
  }
}
