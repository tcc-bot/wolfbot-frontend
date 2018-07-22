import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from './views/Dashboard/dashboardReducer'
import AuthReducer from './views/Pages/Login/authReducer'
import ConfigSelectReducer from './views/Configuracao/SelectReducer'
import ConfiguracaoReducer from './views/Configuracao/ConfiguracaoReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    configuracao: ConfiguracaoReducer,
    selectConfig: ConfigSelectReducer,
    form: formReducer,
    auth: AuthReducer,
    toastr: toastrReducer
})
export default rootReducer