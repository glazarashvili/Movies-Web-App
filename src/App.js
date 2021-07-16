import React from 'react'

import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom'

import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import TvShowsPage from './pages/TvShowsPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const App = () => {
  // React.useEffect(() => {
  //   axios
  //     .get(`http://www.omdbapi.com/?apikey=31790adb&t=${movie}`)
  //     .then(response => console.log(response))
  // }, [movie])

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
      <Footer />
    </Router>
  )
}

export default App
