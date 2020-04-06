import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Albums, Album } from 'pages'

const arrayRoutes = [
  { path: '/', component: Albums, exact: true },
  { path: '/album/:id', component: Album }
]

const Routes = () => (
  <Router basename="/">
    <Switch>
      {arrayRoutes.map(({ path, component: C, exact, ...props }) => (
        <Route path={path} key={path} exact={exact}>
          <C {...props} />
        </Route>
      ))}
    </Switch>
  </Router>
)

export default Routes
