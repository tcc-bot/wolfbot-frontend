import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, InputGroup, Label, Button } from 'reactstrap';
import Input from '../../../components/ui/Input';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import functions from '../../../helpers/functions';
import Select from '../../../components/ui/Select';

import { getDadosPessoais, salvar, getCountries } from '../../../_actions/PerfilActions';

class DadosPessoais extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialValues: {},
      user: functions.loadLocalStorage('user_bot')
    }
  }

  onSubmit(profileData) {
    this.props.salvar({
      ...profileData,
      genre: this.props.genreSelected.value,
      country: this.props.countrySelected.value
    }, this.state.user.Token);
  }

  async componentDidMount() {
    this.props.getDadosPessoais(this.state.user.Token);
    this.props.getCountries(this.state.user.Token);
  }

  render() {

    const { handleSubmit } = this.props;
    const dadosPessoais = this.props.initialValues;

    return (
      <div style={{ width: '100%' }}>
        <div className='' style={{ width: '25%', margin: 'auto' }}>
          <img src={this.props.initialValues.photo} width='180px' height='180px'
            style={{ display: 'block', margin: '10px auto' }} />
          <h5 style={{ textAlign: 'center', color: '#C0C6CD' }}>{dadosPessoais.name}</h5>
        </div>
        <br />
        <div style={{ width: '70%', margin: 'auto', color: '#FFFFFF' }}>
          <form onSubmit={handleSubmit((v) => this.onSubmit(v))}>
            <InputGroup className='mb-3'>
              <Col lg='1'>
                <Label >
                  <h6 style={{ color: '#C0C6CD' }}>Email:</h6>
                </Label>
              </Col>
              <Col>
                <p>{dadosPessoais.email}</p>
              </Col>
            </InputGroup>
            <InputGroup className='mb-3'>
              <Col lg='1'>
                <Label>
                  <h6 style={{ color: '#C0C6CD' }}>Nome:</h6>
                </Label>
              </Col>
              <Col md='10'>
                <Field component={Input} type='text' name='name' className='form-control' />
              </Col>
            </InputGroup>
            <InputGroup className='mb-3'>
              <Col lg='1'>
                <Label>
                  <h6 style={{ color: '#C0C6CD' }}>Genêro:</h6>
                </Label>
              </Col>
              <Col md='10'>
                <Select
                  actionSelected='GENRE_SELECTED'
                  dados={this.props.genres}
                  name='genre'
                  initialValue={!dadosPessoais.genre || this.props.genreSelected}></Select>
              </Col>
            </InputGroup>
            <InputGroup className='mb-3'>
              <Col lg='1'>
                <Label>
                  <h6 style={{ color: '#C0C6CD' }}>País:</h6>
                </Label>
              </Col>
              <Col md='10'>
                <Select
                  actionSelected='COUNTRY_SELECTED'
                  dados={this.props.countries}
                  name='country'
                  initialValue={!dadosPessoais.country || this.props.countrySelected}>
                </Select>
              </Col>
            </InputGroup>
            <InputGroup className='mb-3'>
              <Col lg='1'>
                <Label>
                  <h6 style={{ color: '#C0C6CD' }}>Cidade:</h6>
                </Label>
              </Col>
              <Col md='10'>
                <Field component={Input} type='text' name='city' className='form-control' />
              </Col>
            </InputGroup>
            <Row>
              <Button type='submit' className='btn-success' style={{ margin: 'auto' }}>Salvar Alterações</Button>
            </Row>
          </form>
        </div>
      </div>
    )
  }
}

DadosPessoais = reduxForm(
  {
    form: 'formDadosPessoais',
    enableReinitialize: true
  },
)(DadosPessoais)
const mapDispatchToProps = dispatch => bindActionCreators({
  getDadosPessoais,
  salvar,
  getCountries
}, dispatch)
const mapStateToProps = state => ({
  initialValues: state.profile.dadosPessoais,
  genres: state.profile.genreSelect,
  genreSelected: state.profile.genreSelected,
  countries: state.profile.countriesSelect,
  countrySelected: state.profile.countrySelected
})
export default connect(mapStateToProps, mapDispatchToProps)(DadosPessoais)
