import React from 'react'
import {connect} from 'react-redux'
import Single from './InsuranceListSingle'
import { Grid, Row, Col, Table } from 'react-bootstrap'
import Modal from './_modal'
import Filter from './_filter'

/**
 * Insurance List
 */
export class InsuranceList extends React.Component
{
  /**
   * Render
   *
   * @returns {XML}
   */
  render() {
    return(
      <div className="request-form-wrapper">
        <Grid fluid={true}>
          <Row>
            <Filter/>
          </Row>
        </Grid>
        <Table hover responsive striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Manufacturer</th>
              <th>Model</th>
              <th>Mileage</th>
              <th>Miles per year</th>
              <th>Insurance Start</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.insurances.map(f => {
              if (this.props.filter === f.status || !this.props.filter.length) {
                return(<Single item={f} key={f.id} />)
              }
            })}
          </tbody>
        </Table>
        <Modal/>
      </div>
    )
  }
}

// export the connected class
function mapStateToProps(state){
  return {
    insurances: state.insurances.list,
    filter: state.insurances.filter
  }
}
export default connect(mapStateToProps)(InsuranceList)