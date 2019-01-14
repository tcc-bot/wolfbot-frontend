import React, { Component } from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

class WfExpansionPanel extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          style={{ backgroundColor: this.props.ColorSummary }}
          expandIcon={<ExpandMoreIcon style={{ color: '#FFFFFF' }} />}>
          <Typography>
            {this.props.SummaryContent}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className='wf-expansion-panel-details'>
          <div style={{ width: '100%' }}>
            {this.props.children}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel >
    )
  }
}
export default WfExpansionPanel
