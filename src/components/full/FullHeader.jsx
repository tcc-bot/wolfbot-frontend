import React, { Component } from 'react'
import { DropdownItem, DropdownMenu, DropdownToggle, Nav } from 'reactstrap'
import PropTypes from 'prop-types'

import { AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../../_actions/authActions'
import Alerts from '../ui/Alerts'

const propTypes = {
  children: PropTypes.node
}

const defaultProps = {}

class FullHeader extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { nome } = this.props.user
    return (
      <React.Fragment>
        <Alerts />
        <AppSidebarToggler className='d-lg-none' display='md' mobile />
        <AppNavbarBrand
          full={{ src: process.env.PUBLIC_URL + 'dist/img/template/wolf-bot-logo.png', width: 150, height: 45, alt: 'WolfBot Logo' }}
          minimized={{ src: process.env.PUBLIC_URL + 'dist/img/template/wolf-bot-icon.png', width: 30, height: 30, alt: 'WolfBot Logo' }}
        />
        <AppSidebarToggler className='d-md-down-none' display='lg' />
        <Nav className='ml-auto' navbar>
          <AppHeaderDropdown direction='down'>
            <DropdownToggle nav>
              <i id='iconFullHeader' className='fa fa-user-circle fa-3x' />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag='div' className='text-center'><strong>{nome}</strong></DropdownItem>
              <DropdownItem><i className='fa fa-user' /> Perfil</DropdownItem>
              <DropdownItem><i className='fa fa-wrench' /> Configurações</DropdownItem>
              <DropdownItem onClick={this.props.logout}><i className='fa fa-lock' /> Sair</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
      </React.Fragment>
    )
  }
}

FullHeader.propTypes = propTypes
FullHeader.defaultProps = defaultProps

const mapStateToProps = state => ({
  user: state.auth.user
})
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    logout
  }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FullHeader)
