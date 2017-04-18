import assert from 'assert'
import insurances from '../../src/reducers/instances/insurances'

const state = {
  list: [
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
    }
  ]
}

describe('Insurance reducers', () => {
  describe('Add / Remove', () => {
    it('add a new insurance request', () => {
      const action = {
        type: 'insurance.add',
        add: {
          name: 'John Doe',
          email: 'john@email.com',
          manufacturer: 'r1',
          model: 'Car ',
          km: '1000',
          meankm: '100',
          start: '2015'
        }
      }
      const expected = {
        list: [
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
          },
          {
            id: 2,
            name: 'John Doe',
            email: 'john@email.com',
            manufacturer: 'r1',
            model: 'Car ',
            km: '1000',
            meankm: '100',
            start: '2015',
            status: 'pending'
          }
        ]
      }
      assert.deepEqual(insurances(state,action), expected)
    })
    it('delete an insurance request', () => {
      const action = {
        type: 'insurance.delete',
        id: 1,
      }
      const expected = {
        list: []
      }
      assert.deepEqual(insurances(state,action), expected)
    })
  })
  describe('Status', () => {
    let action = {
      id: 1
    }
    it('accept an insurance request', () => {
      action.type = 'instance.accept'
      const expected = {
        list: [
          {
            id: 1,
            name: 'John ',
            email: 'john@email.com',
            manufacturer: 'r1',
            model: 'Car ',
            km: '1000',
            meankm: '100',
            start: '2015',
            status: 'accepted'
          }]
      }
      assert.deepEqual(insurances(state,action), expected)
    })
    it('deny an insurance request', () => {
      action.type = 'instance.deny'
      const expected = {
        list: [
          {
            id: 1,
            name: 'John ',
            email: 'john@email.com',
            manufacturer: 'r1',
            model: 'Car ',
            km: '1000',
            meankm: '100',
            start: '2015',
            status: 'denied'
          }]
      }
      assert.deepEqual(insurances(state,action), expected)
    })
    it('restore an insurance request', () => {
      action.type = 'instance.restore'
      const expected = {
        list: [
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
          }]
      }
      assert.deepEqual(insurances(state,action), expected)
    })
  })
})