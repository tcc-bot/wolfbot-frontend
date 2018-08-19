import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect, Route, Switch } from 'react-router-dom';

import routes from '../routes-open';
import { loadSession } from '../views/Pages/Login/authActions'

import {
  AppBreadcrumb
} from '@coreui/react';

class RouteControl extends Component {
  componentWillMount() {
    this.props.loadSession();
  }
  render() {
    const { user } = this.props.auth
    if (user) {
      return (<Redirect from="/" to="/dashboard" />)
    } else {
      return (

          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                  <route.component {...props} />
                )} />)
                : (null);
            },
            )}
          </Switch>        
      )
    }
  }
}
const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ loadSession }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(RouteControl)
