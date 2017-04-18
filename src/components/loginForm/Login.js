import React from 'react'
import {connect} from 'react-redux'
import {reduxForm, Field} from 'redux-form'
import { browserHistory} from 'react-router'
import { FormGroup, Form, Col, Row, PageHeader, HelpBlock, FormControl, Button} from 'react-bootstrap'

export class Login extends React.Component
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
        type: 'login.login',
        data: {
          name: values.name,
          password: values.password
        }
      })
      )
    ).then(() => {
      if (this.props.adminStatus.checked) {
        browserHistory.push('/admin')
      } else {
        this.props.dispatch({
          type: 'notice.show',
          title: 'Error',
          message: 'Your login or password is wrong.',
          mode: 'danger',
          show: true
        })
      }

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
                       type={props.type}
          />
          <FormControl.Feedback/>
          <HelpBlock>{props.meta.touched && props.meta.error ? props.meta.error : null}</HelpBlock>
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
      <div  className="request-form-wrapper">
        <Row>
          <Col mdOffset={1} md={10}>
            <PageHeader>Login</PageHeader>
            <Form horizontal onSubmit={this.props.handleSubmit(this.formSubmit.bind(this))}>
              <Field component={Login.renderInputField} name="name" label="Login"/>
              <Field component={Login.renderInputField} name="password" label="Password" type="password"/>
              <FormGroup>
                <Col smOffset={10} sm={2}>
                  <Button type="submit" disabled={this.props.invalid || this.props.submitting} >Send Request</Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

const loginForm = reduxForm({
  form: 'login',
  validate: function(values) {
    const errors = {}
    if (!values.name) errors.name = 'Name is required'
    if (!values.password ) errors.email = 'Password is required'
    return errors
  }

})(Login)

function mapStateToProps(state) {
  return {
    adminStatus: state.admin
  }
}
export default connect(mapStateToProps)(loginForm)