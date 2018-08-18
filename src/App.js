import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'
// import '../node_modules/@coreui/styles/scss/_dropdown-menu-right.scss';

//css react-table
import './scss/react-tables.css'

import RouteControl from './_helpers/routeControl'
import AuthLogin from './views/Pages/Login/authLogin'

// Pages
import {
  Page404,
  Page500
} from './views/Pages';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" name="Login Page" component={AuthLogin} />
          <Route exact path="/register" name="Register Page" component={RouteControl} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route exact path="/passwordrecovery" name="Password Recovery Page" component={RouteControl} />
          <Route exact path="/emailsendpasswordrecovery" name="Email Send Password Recovery Page" component={RouteControl} />
          <Route exact path="/changepassword" name=" Change Password Page" component={RouteControl} />
          <Route path="/" name="AuthLogin" component={AuthLogin} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
