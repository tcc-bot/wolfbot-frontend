import React, { Component } from 'react'
import axios from 'axios'
import * as qs from 'query-string'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Login from './Login'
import { validateToken, loadSession } from '../../../_actions/authActions'
import { Full } from '../../../components';

class AuthLogin extends Component {
  componentWillMount() {
    this.props.loadSession()
    if (this.props.auth.user) {
      this.props.validateToken(this.props.auth.user.Token)
    }
  }

  render() {
    const { user, validToken } = this.props.auth
    if (user && validToken) {
      axios.defaults.headers.common['authorization'] = user.token
      return <Full>{this.props.children}</Full>
    } else if (!user && !validToken) {
      return <Login />
    } else {
      return false
    }
  }
}
const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({
  validateToken,
  loadSession
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin)
