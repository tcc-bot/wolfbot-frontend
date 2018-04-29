import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import DashboardReducer from './dashboardReducer'
import AuthReducer from './authReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    form: formReducer,
    auth: AuthReducer
})
export default rootReducer