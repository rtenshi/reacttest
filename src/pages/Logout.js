import React from 'react'
import Formular from '../components/loginForm/Login'
import { browserHistory} from 'react-router'
import { PageHeader, Row, Col} from 'react-bootstrap'
import { connect} from 'react-redux'

/**
 * Home Page
 */
export class Logout extends React.Component
{

  constructor (props)
  {
    super(props)
  }

  componentWillMount()
  {
    this.props.dispatch({
      type: 'admin.logout'
    })
  }
  /**
   * Render
   * @returns {XML}
   */
  render() {
    return(
    <div  className="request-form-wrapper">
      <Row>
        <Col mdOffset={1} md={10}>
          <PageHeader>You have been logged out.</PageHeader>
        </Col>
      </Row>
    </div>
    )
  }
}
export default connect()(Logout)