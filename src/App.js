import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import 'flag-icon-css/css/flag-icon.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'simple-line-icons/css/simple-line-icons.css'

import './assets/styles/template/react-tables.css'
import './assets/styles/template/style.css'

import './assets/styles/ui/card.css'
import './assets/styles/ui/expansion-panel.css'
import './assets/styles/ui/style-dashboard.css'
import './assets/styles/ui/style-historico.css'

import RouteControl from './helpers/route.control'
import AuthLogin from './views/Pages/Login/authLogin'

import {
  Page404,
  Page500
} from './views/Pages'
class App extends Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/login' name='Login Page' component={AuthLogin} />
          <Route exact path='/register' name='Register Page' component={RouteControl} />
          <Route exact path='/404' name='Page 404' component={Page404} />
          <Route exact path='/500' name='Page 500' component={Page500} />
          <Route exact path='/passwordrecovery' name='Password Recovery Page' component={RouteControl} />
          <Route exact path='/emailsendpasswordrecovery' name='Email Send Password Recovery Page' component={RouteControl} />
          <Route exact path='/changepassword' name='Change Password Page' component={RouteControl} />
          <Route exact path='/emailsendactiveaccount' name='Active Account Page' component={RouteControl} />
          <Route exact path='/passwordChanged' name='Password Changed Page' component={RouteControl} />
          <Route path='/' name='AuthLogin' component={AuthLogin} />
        </Switch>
      </HashRouter>
    )
  }
}

export default App
