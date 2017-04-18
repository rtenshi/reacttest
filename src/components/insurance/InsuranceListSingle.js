import React from 'react'
import { connect } from 'react-redux'
import { Button, ButtonGroup } from 'react-bootstrap'
/**
 * Insurance List Single Element
 */
export class InsuranceListSingle extends React.Component
{
  /**
   * Constructor
   *
   * @param props
   */
  constructor (props)
  {
    super(props)
    /*this.onAccept = this.onAccept.bind(this)
    this.onDeny   = this.onDeny.bind(this)
    this.onDelete = this.onDelete.bind(this)*/
    this.onDoAction = this.onDoAction.bind(this)
  }

  /**
   * Prompt to
   * @param event
   */
  onDoAction(event) {

    const id = Number(event.currentTarget.dataset.id)
    const action = event.currentTarget.dataset.action
    let dispatch = {
      type: 'insurance.modal',
      id: id,
      action: action
    }

    switch (action) {
      case 'accept':
        dispatch.btStyle = 'success'
        break;
      case 'deny':
        dispatch.btStyle = 'warning'
        break;
      case 'delete':
        dispatch.btStyle = 'danger'
        break;
      default:
        dispatch.btStyle = 'info'
    }
    this.props.dispatch(dispatch)
  }

  /**
   * Render
   *
   * @returns {XML}
   */
  render()
  {
    const item = this.props.item;
    return(
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.manufacturer}</td>
        <td>{item.model}</td>
        <td>{item.km}</td>
        <td>{item.meankm}</td>
        <td>{item.start}</td>
        <td>{item.status}</td>
          {
            (item.status === 'pending') ?
              <td>
                <ButtonGroup>
                  <Button bsSize="xsmall" onClick={this.onDoAction} data-id={item.id} data-action="accept"><i className="fa fa-check text-success" aria-hidden="true"></i></Button>
                  <Button bsSize="xsmall" onClick={this.onDoAction} data-id={item.id} data-action="deny"><i className="fa fa-ban text-danger" aria-hidden="true"></i></Button>
                  <Button bsSize="xsmall" onClick={this.onDoAction} data-id={item.id} data-action="delete"><i className="fa fa-trash-o text-danger" aria-hidden="true"></i></Button>
                </ButtonGroup>
              </td>:
            <td>
              <ButtonGroup>
                <Button bsSize="xsmall" onClick={this.onDoAction} data-id={item.id} data-action="restore"><i className="fa fa-repeat text-info" aria-hidden="true"></i></Button>
                <Button bsSize="xsmall" onClick={this.onDoAction} data-id={item.id} data-action="delete"><i className="fa fa-trash-o text-danger" aria-hidden="true"></i></Button>
              </ButtonGroup>
            </td>
          }
      </tr>
    )
  }
}

export default connect()(InsuranceListSingle)
