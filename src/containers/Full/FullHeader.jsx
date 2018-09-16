import React, { Component } from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav } from 'reactstrap';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

import { AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../../views/Pages/Login/authActions'
import { profile } from '../../views/Perfil/PerfilActions'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class FullHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    const { nome } = this.props.user

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: process.env.PUBLIC_URL + 'dist/img/template/logo-icon.svg', width: 150, height: 45, alt: 'WolfBot Logo' }}
          minimized={{ src: process.env.PUBLIC_URL + 'dist/img/template/logo-icon.svg', width: 30, height: 30, alt: 'WolfBot Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="ml-auto" navbar>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <i id="iconFullHeader" className="fa fa-user-circle fa-3x"></i>
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>{nome}</strong></DropdownItem>
              <DropdownItem onClick={this.props.profile}><i className="fa fa-user"></i> Perfil</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Configurações</DropdownItem>
              <DropdownItem onClick={this.props.logout}><i className="fa fa-lock"></i> Sair</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        {this.props.openProfile ? <Redirect from="/" to="/perfil" /> : null}
      </React.Fragment>
    );
  }
}

FullHeader.propTypes = propTypes;
FullHeader.defaultProps = defaultProps;

const mapStateToProps = state => ({
  user: state.auth.user,
  openProfile: state.profile.openProfile
})
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    logout,
    profile
  }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FullHeader)
