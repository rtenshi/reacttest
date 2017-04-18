import React from 'react'
import { connect } from 'react-redux'
import { Row,FormControl, PageHeader, Form, FormGroup, Button,
         Col, HelpBlock } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'
import DatePicker from 'react-bootstrap-date-picker'

import './requestform.scss'

export class RequestForm extends React.Component
{
  /**
   * Constructor
   * @param props
   */
  constructor (props) {
    super(props)
    this.formSubmit = this.formSubmit.bind(this)
  }

  /**
   * Form Submit on Success
   * @param values
   */
  formSubmit(values) {
    new Promise((resolve) => resolve(
      this.props.dispatch({
        type: 'insurance.add',
        add: {
          name: values.name,
          email: values.email,
          manufacturer: values.manufacturer,
          model: values.model,
          km: values.km,
          meankm: values.meankm,
          start: values.start,
        }
      })
      )
    ).then(() => {
      this.props.dispatch({
        type:'notice.show',
        title: 'Thank you',
        message: 'Your request was successfully sent and will be controlled by one of our salesmen.',
        mode: 'success',
        show: true
      })
      this.props.reset()
    })
  }

  /**
   * Fieldset
   * @param props
   * @returns {XML}
   */
  static renderInputField(props)
  {
    return(
      <FormGroup validationState={!props.meta.touched ? null :
        (props.meta.error ? 'error' : 'success')}>
        <Col sm={3}>
          {props.label}
        </Col>
        <Col sm={9}>
          <FormControl {...props.input}
                       id={props.label}
                       name={props.label}
          />
          <FormControl.Feedback/>
          <HelpBlock>{props.meta.touched && props.meta.error ? props.meta.error : null}</HelpBlock>
        </Col>
      </FormGroup>
    )
  }

  static renderDatepicker(props) {
    let minDate = new Date()
    minDate.setDate(minDate.getDate() + 1)
    return(
      <FormGroup>
        <Col sm={3}>
          Start date
        </Col>
        <Col sm={9}>
          <DatePicker {...props.input} name="start" minDate={minDate.toISOString()} />
        </Col>
      </FormGroup>
    )
  }

  /**
   * Render
   * @returns {XML}
   */
  render()
  {

    return(
      <div className="request-form-wrapper">
        <Row>
        <Col mdOffset={1} md={10}>
          <PageHeader>Request an insurance</PageHeader>
          <Form horizontal onSubmit={this.props.handleSubmit(this.formSubmit.bind(this))} name="request-insurance">
            <Field component={RequestForm.renderInputField} name="name" label="Name"/>
            <Field component={RequestForm.renderInputField} name="email" label="Email" type="email"/>
            <Field component={RequestForm.renderInputField} name="manufacturer" label="Manufacturer" />
            <Field component={RequestForm.renderInputField} name="model" label="Model" />
            <Field component={RequestForm.renderInputField} name="km" label="Mileage of the car" />
            <Field component={RequestForm.renderInputField} name="meankm" label="Number of miles the car will be travelling in a year" />
            <Field component={RequestForm.renderDatepicker} name="start" label="Earlier starting date" />

            <FormGroup>
              <Col smOffset={10} sm={2}>
                <Button type="submit" disabled={this.props.invalid || this.props.submitting} >Send Request</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col></Row>
      </div>
    )
  }
}
String.prototype.regexIndexOf = function(regex, startpos) {
  var indexOf = this.substring(startpos || 0).search(regex);
  return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
}
// redux-form
const insuranceRequestForm = reduxForm({
  form: 'request_insurance',
  validate: function(values) {
    const errors = {}
    if (!values.name) errors.name = 'Name is required'
    if (!values.email || values.email.toString().regexIndexOf(/@\w+\.\w+/) < 0) errors.email = 'Please enter a valid email'
    if (!values.manufacturer) errors.manufacturer = 'Manufacturer is required'
    if (!values.model) errors.model = 'Car model is required'
    if (isNaN(values.km)) errors.km = 'Mileage of the car has to be a number'
    if (!values.km) errors.km = 'Mileage of the car is required'
    if (isNaN(values.meankm)) errors.meankm = 'Number of miles the car will be travelling in a year has to be a number'
    if (!values.meankm) errors.meankm = 'Number of miles the car will be travelling in a year is required'
    if (!values.start) errors.start= 'Please select a starting date'
    return errors
  }

})(RequestForm)

export default connect()(insuranceRequestForm)