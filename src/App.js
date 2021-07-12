import React from 'react'

import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom'

// import axios from 'axios'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import TvShowsPage from './pages/TvShowsPage'
import Header from './components/Header/Header'

const App = () => {
  // React.useEffect(() => {
  //   axios
  //     .get('http://www.omdbapi.com/?apikey=31790adb&t=interstellar')
  //     .then(response => console.log(response))
  // })

  return (
    <Router>
      <Header />
      <Route path='/' exact>
        <Redirect to='home' />
      </Route>
      <Route path='/home' exact>
        <HomePage />
      </Route>
      <Route path='/movies'>
        <MoviesPage />
      </Route>
      <Route path='/tvshows'>
        <TvShowsPage />
      </Route>
    </Router>
  )
}

export default App
