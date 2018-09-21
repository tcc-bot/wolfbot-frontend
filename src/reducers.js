import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from './reducers/dashboardReducer';
import AuthReducer from './reducers/authReducer';
import ConfigSelectReducer from './reducers/SelectReducer';
import ConfiguracaoReducer from './reducers/ConfiguracaoReducer';
import TableSaldoReducer from './reducers/TableSaldoReducer';
import CarteiraReducer from './reducers/CarteiraReducer';
import HistoricoReducer from './reducers/HistoricoReducer';

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
