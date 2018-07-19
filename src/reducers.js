import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from './views/Dashboard/dashboardReducer'
import AuthReducer from './views/Pages/Login/authReducer'
import ConfiguracaoReducer from './views/Configuracao/ConfiguracaoReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    configuracao: ConfiguracaoReducer,
    form: formReducer,
    auth: AuthReducer,
    toastr: toastrReducer
})
export default rootReducer