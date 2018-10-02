import React from 'react'
import ReduxToastr from 'react-redux-toastr'
import '../../assets/styles/template/react-redux-toastr.css'

export default props => (
  <ReduxToastr
    timeOut={3000}
    newestOnTop={false}
    preventDuplicates
    position='top-right'
    transitionIn='fadeIn'
    transitionOut='fadeOut' />
)
