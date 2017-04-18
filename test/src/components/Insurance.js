import React from 'react'
import { shallow, render } from 'enzyme'
import assert from 'assert'

import { InsuranceList } from '../../../src/components/insurance/InsuranceList'
import { InsuranceListSingle } from '../../../src/components/insurance/InsuranceListSingle'
import { InsuranceModal } from '../../../src/components/insurance/_modal'
import { Filter } from '../../../src/components/insurance/_filter'

const insuranceList = [
  {
    id: 1,
    name: 'John ',
    email: 'john@email.com',
    manufacturer: 'r1',
    model: 'Car ',
    km: '1000',
    meankm: '100',
    start: '2015',
    status: 'pending'
  },{
    id: 2,
    name: 'John ',
    email: 'john@email.com',
    manufacturer: 'r1',
    model: 'Car ',
    km: '1000',
    meankm: '100',
    start: '2015',
    status: 'pending'
  },
  {
    id: 3,
    name: 'John ',
    email: 'john@email.com',
    manufacturer: 'r1',
    model: 'Car ',
    km: '1000',
    meankm: '100',
    start: '2015',
    status: 'pending'
  },
  {
    id: 4,
    name: 'John ',
    email: 'john@email.com',
    manufacturer: 'r1',
    model: 'Car ',
    km: '1000',
    meankm: '100',
    start: '2015',
    status: 'accepted'
  },
  {
    id: 5,
    name: 'John ',
    email: 'john@email.com',
    manufacturer: 'r1',
    model: 'Car ',
    km: '1000',
    meankm: '100',
    start: '2015',
    status: 'denied'
  },
  {
    id: 6,
    name: 'John ',
    email: 'john@email.com',
    manufacturer: 'r1',
    model: 'Car ',
    km: '1000',
    meankm: '100',
    start: '2015',
    status: 'accepted'
  },

]
let props = {
  insurances: insuranceList,
  filter: '',
  modal: {}
}

describe('Insurance Component', () => {
  describe('List', () => {
    it('is a Table', () => {
      const wrapper = shallow(<InsuranceList {...props}/>);
      assert.equal(wrapper.find('Table').length, 1)
      assert.equal(wrapper.find('tbody').length, 1)
      assert.equal(wrapper.find('tr').length, 1)
    })
  })
  describe('Single', () => {
    it('pending', () => {
      const props = {
        item: {
          id: 2,
          name: 'John ',
          email: 'john@email.com',
          manufacturer: 'r1',
          model: 'Car ',
          km: '1000',
          meankm: '100',
          start: '2015',
          status: 'pending'
        }
      }
      const wrapper = shallow(<InsuranceListSingle {...props}/>);
      assert(wrapper.find('td').length, 10)
      assert(wrapper.find('Button').length, 3)
    })
    it('Status changed', () => {
      const props = {
        item: {
          id: 2,
          name: 'John ',
          email: 'john@email.com',
          manufacturer: 'r1',
          model: 'Car ',
          km: '1000',
          meankm: '100',
          start: '2015',
          status: 'accepted'
        }
      }
      const wrapper = shallow(<InsuranceListSingle {...props}/>);
      assert(wrapper.find('td').length, 10)
      assert(wrapper.find('Button').length, 2)
    })

  })
  describe('Modal', () => {
    it('show', () => {
      const props = {
        informations: {
          show: true,
          btStyle: 'success',
          id: 1,
          action: 'accept'
        }
      }
      const wrapper = shallow(<InsuranceModal {...props}/>);
      assert.equal(wrapper.find('Modal').length, 1)

      assert.equal(wrapper.find('strong').length, 1)
    })
    it('hide', () => {
      const props = {
        informations: {
          show: false,
        }
      }
      const wrapper = shallow(<InsuranceModal {...props}/>);
      assert.equal(wrapper.find('Modal').length, 1)
      assert.equal(wrapper.find('strong').length, 1)
    })

  })
  describe('Filter', () => {
    it('render()', () => {
      const props = {
        filter: ''
      }
      const wrapper = shallow(<Filter {...props}/>);
      assert.equal(wrapper.find('Button').length, 4)
    })
  })
})