import React from 'react'

import { fetchPopularMovies, fetchTopRatedMovies } from '../../service/index'

import MovieMenu from './MovieMenu'
import MainLayout from '../../components/MainLayout/MainLayout'

export const HomePage = () => {
  return (
    <React.Fragment>
      <MainLayout />
      <MovieMenu func={fetchPopularMovies} type='Popular' />
      <MovieMenu func={fetchTopRatedMovies} type='Top Rated' />
    </React.Fragment>
  )
}
