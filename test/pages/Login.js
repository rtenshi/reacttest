import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import { Login } from '../../src/components/loginForm/Login'

const props = {
  initialValues: {
    name: 'Test',
    password: 'test123'
  },
  handleSubmit: () => {},
  invalid: true,
  submitting: false
}
describe('Login Page', () => {
  it('render()', () => {
    const wrapper = shallow(<Login {...props} />);
    assert.equal(wrapper.find('div').length, 1)
    assert.equal(wrapper.find('Field').length, 2)
  })
})