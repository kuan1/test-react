import React, {FunctionComponent} from 'react'
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Home from './components/Home'
import Test from './components/Test'

const routes = [
  {
    name: '首页',
    path: '/',
    component: <Home />
  },
  {
    name: '测试',
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