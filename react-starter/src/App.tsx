import React, {FunctionComponent} from 'react'
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom'

import UseState from './components/UseState'
import Test from './components/Test'
import UseReducer from './components/UseReducer'
import UseEffect from './components/UseEffect'
import UseRef from './components/UseRef'
import TestClass from './components/TestClass'
import CustomHooks from './components/CustomHooks'

const routes = [
  {
    name: 'useState',
    path: '/',
    component: <UseState />
  },
  {
    name: 'useReducer',
    path: '/useReducer',
    component: <div><UseReducer /> <UseReducer/></div>
  },
  {
    name: 'useEffect',
    path: '/useEffect',
    component: <UseEffect />
  },
  {
    name: 'useRef',
    path: '/useRef',
    component: <UseRef />
  },
  {
    name: 'testComponent',
    path: '/testComponent',
    component: <TestClass />
  },
  {
    name: 'customHooks',
    path: '/customHooks',
    component: <CustomHooks />
  },
  {
    name: 'test',
    path: '/test',
    component: <Test />
  }
]

const App:FunctionComponent<{}> = () => {
  return (
    <Router>
      {/* 导航 */}
      <div className="nav-wrap">
        {routes.map(route => (
          <Link key={route.path} to={route.path}>
            <button>{route.name}</button>
          </Link>
        ))}
      </div>

      {/* 路由 */}
      <Switch>
        {
          routes.map(route => (
            <Route exact key={route.path} path={route.path}>
              {route.component}
            </Route>
          ))
        }
      </Switch>
    </Router>
  )
}

export default App