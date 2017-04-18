import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import Admin from '../../src/pages/Admin'


describe('Admin Page', () => {
  it('render()', () => {
    const wrapper = shallow(<Admin/>);
    assert.equal(wrapper.find('div').length, 1)
  })

})