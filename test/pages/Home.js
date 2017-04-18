import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import { Home } from '../../src/pages/Home'
import { RequestForm } from '../../src/components/requestForm/RequestForm'

const props = {
  initialValues: {
    name: 'John ',
    email: 'john@email.com',
    manufacturer: 'r1',
    model: 'Car ',
    km: '1000',
    meankm: '100',
    start: '2015',
  },
  handleSubmit: () => {},
  invalid: true,
  submitting: false
}

describe('Home Page', () => {
  it('render()', () => {
    const wrapper = shallow(<RequestForm {...props} />);
    assert.equal(wrapper.find('div').length, 1)
    assert.equal(wrapper.find('Field').length, 7)
  })
  it('Button is disabled on invalid', () =>{
    const wrapper = shallow(<RequestForm {...props} />);
    assert.equal(wrapper.find('Button').prop('disabled'), true);
  })
})