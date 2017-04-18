import reducer from '../reducerCall'
/**
 * Notice reducer
 * @param state
 * @param action
 * @returns {*}
 */
export default function notice(state = {}, action)
{
  return reducer(state, action, reducerClass)
}

class reducerClass
{
  /**
   * Show notice
   *
   * @param newState
   * @param action
   * @returns {*}
   */
  static show(newState, action)
  {
    return Object.assign({}, action)
  }

  /**
   * Hide Notice
   * @param newState
   * @param action
   */
  static clear(newState, action)
  {
    newState = {
      show: false,
      title: '',
      message: '',
      label: ''
    }
    return newState
  }
}

export function showNotice(type = 'info', title = '', message = '', label = '') {

}
export function clear() {
  this.props.dispatch({
    type: 'notice.clear'
  })
}