import React from 'react'
import { connect } from 'react-redux'
import { Alert, Fade } from 'react-bootstrap'
import { clear } from '../../reducers/instances/notice'

import './notice.scss'

export class Notice extends React.Component
{
  render() {
    return(
      <Fade in={this.props.show} >
        <Alert bsStyle={this.props.mode} closeLabel={this.props.label} onDismiss={ clear.bind(this) }>
          <h4>{this.props.title}</h4>
          <p>{this.props.message}</p>
        </Alert>
      </Fade>
    )
  }
}

function mapStateToProps(state){
  return state.notice
}
export default connect(mapStateToProps)(Notice)
