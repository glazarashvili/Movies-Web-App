import React from 'react'

import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom'

import TvPage from './pages/TvPage'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import TvShowsPage from './pages/TvShowsPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import CinemaniaPage from './pages/CinemaniaPage'

const App = () => {
  return (
    <Router>
      <Header />
      <Route path='/' exact>
        <Redirect to='home' />
      </Route>
      <Route path='/home' exact>
        <HomePage />
      </Route>
      <Route path='/movies' exact>
        <MoviesPage />
      </Route>
      <Route path='/tvshows'>
        <TvShowsPage />
      </Route>
      <Route path='/tv'>
        <TvPage />
      </Route>
      <Route path='/cinemania'>
        <CinemaniaPage />
      </Route>
      <Footer />
    </Router>
  )
}

export default App
