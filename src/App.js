import React from 'react'

import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom'

import { AppRoutes as routes } from './routes/app-routes'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import * as views from './pages'

const App = () => {
  console.log(views, 'views')
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
            key={route.component}
            path={`/${route.path}`}
            component={Component}
            exact={route.exact}
          />
        )
      })}
      <Footer />
    </Router>
  )
}

export default App
