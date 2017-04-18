import React from 'react'
import { shallow } from 'enzyme'
import assert from 'assert'

import { Notice } from '../../../src/components/notices/Notice'

describe('Notice component', () => {
    it('render()', () => {
      const wrapper = shallow(<Notice />);
      assert.equal(wrapper.find('Alert').length, 1)
      assert.equal(wrapper.find('h4').length, 1)
      assert.equal(wrapper.find('p').length, 1)
    })
})