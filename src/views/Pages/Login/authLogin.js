import React, { Component } from 'react'
import axios from 'axios'
import * as qs from 'query-string'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Login from './Login'
import { validateToken, loadSession, ativarConta } from './authActions'
import { Full } from '../../../containers';

class AuthLogin extends Component {
  componentWillMount() {
    this.props.loadSession();
    const activeAccountHash = qs.parse(this.props.location.search).parameter;
    if (activeAccountHash) {
      this.props.ativarConta(activeAccountHash)
    }
    else {
      if (this.props.auth.user) {
        this.props.validateToken(this.props.auth.user.token)
      }
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
  loadSession,
  ativarConta
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin)
