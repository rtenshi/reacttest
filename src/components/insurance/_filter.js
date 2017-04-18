import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, ButtonGroup, Button} from 'react-bootstrap'

export class Filter extends React.Component
{
  /**
   * Constructor function
   * @param props
   */
  constructor (props)
  {
    super(props)
    this.onFilter = this.onFilter.bind(this)
  }

  /**
   * Filter trigger
   * @param event
   */
  onFilter(event) {
    const status = event.target.dataset.filter
    this.props.dispatch({
      type: 'insurance.filter',
      filter: status
    })
  }
  /**
   * Render function
   * @returns {XML}
   */
  render() {
    return(
      <Row>
        <Col sm={12}>
          <ButtonGroup >
            <Button active={this.props.filter === ''} onClick={this.onFilter.bind(this)} data-filter="">Show all</Button>
            <Button active={this.props.filter === 'accepted'} onClick={this.onFilter.bind(this)} data-filter="accepted">Accepted</Button>
            <Button active={this.props.filter === 'denied'} onClick={this.onFilter.bind(this)} data-filter="denied">Denied</Button>
            <Button active={this.props.filter === 'pending'} onClick={this.onFilter.bind(this)} data-filter="pending">Pending</Button>
          </ButtonGroup>
          <br />
          <br />
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    filter: state.insurances.filter
  }
}
export default connect(mapStateToProps)(Filter)