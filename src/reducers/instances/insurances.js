import reducer from '../reducerCall'
/**
 * Insurances reducer
 *
 * @param state
 * @param action
 * @returns {*}
 */
export default function insurance(state = {}, action)
{
  return reducer(state, action, reducerClass)
}

class reducerClass
{
  /**
   * Shows the dialog Box
   * @param newState
   * @param action
   * @returns {*}
   */
  static modal(newState, action)
  {
    newState.modal = newState.modal || {}
    newState.modal.info = {
      show: true,
      id: action.id,
      btStyle: action.btStyle,
      action: action.action
    }
    return newState
  }

  /**
   * Hides the Dialogbox
   *
   * @param newState
   * @param action
   * @returns {*}
   */
  static modalHide(newState, action)
  {
    newState.modal.info = {
      show: false,
      id: 0
    }
    return newState
  }

  /**
   * Add new Insurance
   *
   * @param newState
   * @param action
   * @returns {*}
   */
  static add(newState, action)
  {
    let add = action.add
    let list = newState.list.map(x => x.id)
    add.id = Number(Math.max(...list) + 1)
    add.status = 'pending'
    newState.list = [...newState.list, add]
    return newState
  }

  /**
   * Persist insurance as accepted
   * @param newState
   * @param action
   * @returns {*}
   */
  static accept(newState, action) {
    let list = newState.list.map(x => {
      if(x.id == action.id) {
        x.status = 'accepted'
      }
      return x
    })
    newState.list = [...list]
    return newState
  }

  /**
   * Return the Insurace request to pending Status
   * @param newState
   * @param action
   * @returns {*}
   */
  static restore(newState, action) {
    newState.list = newState.list.map(x => {
      if(x.id == action.id) {
        x.status = 'pending'
      }
      return x
    })
    return newState
  }

  /**
   * Persist insurance as denied
   * @param newState
   * @param action
   * @returns {*}
   */
  static deny(newState, action) {
    newState.list = newState.list.map(x => {
      if(x.id == action.id) {
        x.status = 'denied'
      }
      return x
    })
    return newState
  }

  /**
   * Remove the insurance request from the list
   * @param newState
   * @param action
   * @returns {*}
   */
  static delete(newState, action)
  {
    newState.list = newState.list.filter(x => x.id != action.id)
    return newState
  }

  /**
   * Filter reducer
   * @param newState
   * @param action
   * @returns {*}
   */
  static filter(newState, action)
  {
    newState.filter = action.filter
    return newState
  }
}