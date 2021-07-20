import React from 'react'

import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom'

import { AppRoutes as routes } from './routes/app-routes'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import * as views from './pages'

const App = () => {
  return (
    <Router>
      <Header />
      <Route path='/' exact>
        <Redirect to='home' />
      </Route>
      {routes.map(route => {
        const Component = views[route.component]
        return (
          <Route
            exact={route.exact}
            key={route.component}
            component={Component}
            path={`/${route.path}`}
          />
        )
      })}
      <Footer />
    </Router>
  )
}

export default App
