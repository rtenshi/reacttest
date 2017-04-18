import React from 'react'
import Formular from '../components/loginForm/Login'
import { browserHistory} from 'react-router'

/**
 * Home Page
 */
export default class Login extends React.Component
{

  static logout(nextState, transition)
  {
    if(nextState.getState()){
      console.log(nextState.getState())
      if(nextState.getState().admin.checked){
        console.log(nextState.dispatch)
        nextState.dispatch({
          type: 'admin.logout'
        })
        browserHistory.push('/')
      }
   }
  }

  /**
   * Render
   * @returns {XML}
   */
  render() {
    return(<Formular/>)
  }
}