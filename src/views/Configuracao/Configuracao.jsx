import React, { Component } from 'react'
import { Row } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Alerts from '../../components/ui/Alerts'
import Card from '../../components/ui/Card'
import ExpansionPanel from '../../components/ui/ExpansionPanel'

import Estrategia from './screens/Estrategia'
import ExchangeIntegracao from './screens/ExchangeIntegracao'


class Configuracao extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return (
      <div className='animated fadeIn'>
        <Row>
          <div>
            <Alerts />
          </div>
          <Card
            xs='10'
            lg='10'
            sm='10'
            icon='icon-settings'
            titleHeader='Configuração'>
            <div>
              <ExpansionPanel
                ColorSummary={"#192024"}
                SummaryContent={
                  <a class="text-white"><i className='fa fa-check-circle fa-2x text-success' style={{ textAlign: 'center;' }}>
                  </i>&nbsp;&nbsp;&nbsp;Integre com sua exchange</a>}>
                <br />
                <ExchangeIntegracao />
              </ExpansionPanel>
            </div>
            <ExpansionPanel
              ColorSummary={"#192024"}
              SummaryContent={
                <a class="text-white"><i className='fa fa-exclamation-circle fa-2x text-danger' style={{ textAlign: 'center;' }}>
                </i>&nbsp;&nbsp;&nbsp;Defina sua estratégia</a>}>
              <br />
              <Estrategia />
            </ExpansionPanel>
          </Card>
        </Row >
      </div >
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
const mapStateToProps = state => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(Configuracao)