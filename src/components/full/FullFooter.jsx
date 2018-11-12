import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node
}

const defaultProps = {}

class FullFooter extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span><a href='https://wolbot.com.br'>WolfBot</a> &copy; 2018</span>
        <span className='ml-auto'><a href='https://wolfbot.com.br'>WolfBot</a></span>
      </React.Fragment>
    )
  }
}

FullFooter.propTypes = propTypes
FullFooter.defaultProps = defaultProps

export default FullFooter
