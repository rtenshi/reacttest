import React from 'react'
import { shallow } from 'enzyme'
import assert from 'assert'

import App from '../../src/components/App'
import { Row } from 'react-bootstrap'

describe('App component', () => {
  describe('Basic functions', () => {
    it('render()', () => {
      const wrapper = shallow(<App/>);
      assert.equal(wrapper.find('.main').length, 1)
      assert.equal(wrapper.find('.double-border').length, 1)

    })
  })
})