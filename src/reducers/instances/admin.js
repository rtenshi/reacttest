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
  static login(newState, action)
  {
    if (action.data.password === 'test123') {
      newState.checked = true
      newState.username = action.data.name
    }
    return newState
  }

  /**
   * Hide Notice
   * @param newState
   * @param action
   */
  static logout(newState, action)
  {
    newState.checked = false
    newState.username = null

    return newState
  }
}