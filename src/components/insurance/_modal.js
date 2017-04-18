import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
/**
 * Insurance Delete dialog Box
 */
export class InsuranceModal extends React.Component
{

  /**
   * Constructor
   * @param props
   */
  constructor (props) {
    super(props)
    this.modalHide = this.modalHide.bind(this)
    this.modalConfirm = this.modalConfirm.bind(this)
  }

  modalConfirm(event) {
    const action = event.target.dataset.action
    const id = event.target.dataset.id

    new Promise((request) => request(
      this.props.dispatch({
        type: 'insurance.'+action,
        id: id,
      })
    )).then(() => {
      this.props.dispatch({type: 'insurance.modalHide'})
    })
  }
  /**
   * Modal Hide
   * @param event
   */
  modalHide(event) {
    this.props.dispatch({
      type: 'insurance.modalHide'
    })
  }
  /**
   * Render
   */
  render() {

    return(
      <Modal show={this.props.informations.show}>
        <Modal.Header>
          <Modal.Title>
            Are you sure you want to <strong>{this.props.informations.action}</strong> this request?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
            <Button onClick={ this.modalHide }>No</Button>
            <Button bsStyle={ this.props.informations.btStyle }
                    onClick={this.modalConfirm}
                    data-action={this.props.informations.action}
                    data-id={this.props.informations.id} >Yes</Button>
          </Modal.Footer>
      </Modal>
    )
  }
}
function mapState(state) {
  let informations
  if (state.insurances.modal && state.insurances.modal.info) {
    informations = state.insurances.modal.info
  } else {
    informations = {
      show: false,
      id: 0
    }
  }
  return ({
    informations: informations
  })
}
export default connect(mapState)(InsuranceModal)