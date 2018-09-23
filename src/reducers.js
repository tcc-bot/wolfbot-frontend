import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from './views/Dashboard/dashboardReducer'
import AuthReducer from './views/Pages/Login/authReducer'
import ConfigSelectReducer from './views/Configuracao/SelectReducer'
import ConfiguracaoReducer from './views/Configuracao/ConfiguracaoReducer'
import TableSaldoReducer from './views/Carteira/TableSaldoReducer'
import CarteiraReducer from './views/Carteira/CarteiraReducer'
import HistoricoReducer from './views/Historico/HistoricoReducer'

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  configuracao: ConfiguracaoReducer,
  carteira: CarteiraReducer,
  selectConfig: ConfigSelectReducer,
  tableSaldo: TableSaldoReducer,
  form: formReducer,
  auth: AuthReducer,
  toastr: toastrReducer,
  historico: HistoricoReducer
})
export default rootReducer
