import assert from 'assert'
import admin from '../../src/reducers/instances/admin'

const state = {}

describe('Administrator reducers', () => {
  describe('Basic Functions', () => {
    it('Login', () => {
      const action = {
        type: 'admin.login',
        data: {
          name: 'Test',
          password: 'test123'
        }
      }
      const expected = {
        checked: true,
        username: 'Test'
      }
      assert.deepEqual(admin(state,action), expected)
    })
    it('Logout', () => {
      const action = {
        type: 'admin.logout'
      }
      const expected = {
        checked: false,
        username: null
      }
      assert.deepEqual(admin(state,action), expected)
    })
  })
})