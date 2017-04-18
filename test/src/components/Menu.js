import React from 'react'
import { shallow } from 'enzyme'
import assert from 'assert'

import { Menu } from '../../../src/components/menu/Menu'

describe('Menu component', () => {
    it('render() not Logged', () => {
      const props = {
        adminStatus: {checked: false}
      }
      const wrapper = shallow(<Menu {...props} />);
      assert.equal(wrapper.find('Nav').length, 1)
      assert.equal(wrapper.find('NavItem').length, 2)
    })
    it('render() Logged', () => {
      const props = {
        adminStatus: {checked: true}
      }
      const wrapper = shallow(<Menu {...props} />);
      assert.equal(wrapper.find('Nav').length, 1)
      assert.equal(wrapper.find('NavItem').length, 3)
    })
})