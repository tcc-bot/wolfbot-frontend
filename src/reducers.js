import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from './_reducers/dashboardReducer'
import AuthReducer from './_reducers/authReducer'
import ConfigSelectReducer from './_reducers/SelectReducer'
import ConfiguracaoReducer from './_reducers/ConfiguracaoReducer'
import CarteiraReducer from './_reducers/CarteiraReducer'
import HistoricoReducer from './_reducers/HistoricoReducer'
import PerfilReducer from './_reducers/PerfilReducer'

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  configuracao: ConfiguracaoReducer,
  carteira: CarteiraReducer,
  selectConfig: ConfigSelectReducer,
  form: formReducer,
  auth: AuthReducer,
  toastr: toastrReducer,
  historico: HistoricoReducer,
  profile: PerfilReducer
})
export default rootReducer
