import React from 'react'
import Menu from './menu/Menu'
import Notice from './notices/Notice'
import {Grid, Row, Col} from 'react-bootstrap'
/**
 * App Main Component
 */

export default class App extends React.Component
{
  /**
   * Render
   *
   * @returns {XML}
   */
  render()
  {
    return (
      <Grid className="main">
        <Row>
          <Col>
            <Menu/>
          </Col>
        </Row>
        <Row className="double-border">
          <Col sm={12}><Notice/></Col>
        </Row>
        <Row>
          {this.props.children}
        </Row>
      </Grid>
    )
  }
}

