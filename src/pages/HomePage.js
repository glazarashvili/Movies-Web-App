import React from 'react'

import {
  // fetchOnGoingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
} from '../service/index'

import Movies from '../components/Movies/Movies'
import MainLayout from '../components/MainLayout/MainLayout'

export const HomePage = () => {
  return (
    <React.Fragment>
      <MainLayout />
      <Movies moviesType='Top Rated' func={fetchTopRatedMovies} />
      <Movies moviesType='Popular' func={fetchPopularMovies} />
    </React.Fragment>
  )
}
