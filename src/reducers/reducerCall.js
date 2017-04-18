/**
 * Abstract Class - Reducer Call
 * @param state
 * @param action
 * @param reducerClass
 * @returns {*}
 */
export default function reducerCall(state = {}, action, reducerClass)
{
  const [,method] = action.type.split('.')

  const methods = Object.getOwnPropertyNames(reducerClass).filter(name => {
    if('length' !== name && 'name' !== name && 'prototype' !== name) {
      return name
    }
  })

  if (methods.find(x => x === method)) {
    const new_state = JSON.parse(JSON.stringify(state))
    return reducerClass[method](new_state, action)

  } else {
    return state
  }
}