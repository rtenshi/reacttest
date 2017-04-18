import ReactDOM from 'react-dom'
import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory, Router,Route, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerMiddleware} from 'react-router-redux'
import { Provider } from 'react-redux'

import App from './components/App'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Logout from './pages/Logout'

import { reducers } from './reducers/index'

//Styles
import './stylesheets/main.scss'

let insurances = []
for (let i=1; i<10; i++) {
  insurances = [...insurances, {
    id: i,
    name: 'John ' + i,
    email: 'john'+i+'@email.com',
    manufacturer: 'r'+i*2,
    model: 'Car ' + i,
    km: i * 1000,
    meankm: i*200+i^i,
    start: Date.now(),
    status: 'pending'
  }]
}
const initialState = {
  insurances: {
    list: insurances,
    filter: ''
  },
  notice: { show:false }
}

let middleware = applyMiddleware(routerMiddleware(browserHistory))
if (process.env.NODE_ENV !== 'production') {
  middleware = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  initialState,
  middleware)
/* eslint-enable */

const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="admin" component={Admin} />
        <Route path="login" component={Login} ></Route>
        <Route path="logout" component={Logout}></Route>
        <Route path="*" component={Home} ></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);