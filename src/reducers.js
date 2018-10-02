import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from './_reducers/dashboardReducer';
import AuthReducer from './_reducers/authReducer';
import ConfigSelectReducer from './_reducers/SelectReducer';
import ConfiguracaoReducer from './_reducers/ConfiguracaoReducer';
import TableSaldoReducer from './_reducers/TableSaldoReducer';
import CarteiraReducer from './_reducers/CarteiraReducer';
import HistoricoReducer from './_reducers/HistoricoReducer';

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
