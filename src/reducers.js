import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from './views/Dashboard/dashboardReducer'
import AuthReducer from './views/Pages/Login/authReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    form: formReducer,
    auth: AuthReducer,
    toastr: toastrReducer
})
export default rootReducer