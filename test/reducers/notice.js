import assert from 'assert'
import notice from '../../src/reducers/instances/notice'

const state = {}

describe('Notice Reducer', () => {
  describe('Basic Functions', () => {
    it('Show', () => {
      const action = {
        type:'notice.show',
        title: 'Thank you',
        message: 'Your request was successfully sent and will be controlled by one of our salesmen.',
        mode: 'success',
        show: true
      }
      const expected = {
        type:'notice.show',
        title: 'Thank you',
        message: 'Your request was successfully sent and will be controlled by one of our salesmen.',
        mode: 'success',
        show: true
      }
      assert.deepEqual(notice(state,action), expected)
    })
    it('Hide', () => {
      const action = {
        type: 'notice.clear'
      }
      const expected = {
        show: false,
        title: '',
        message: '',
        label: ''
      }
      assert.deepEqual(notice(state,action), expected)
    })
  })
})