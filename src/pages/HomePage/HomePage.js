import React from 'react'

import { fetchPopularMovies, fetchTopRatedMovies } from '../../service/index'

import MovieMenu from './MovieMenu'
import MainLayout from '../../components/MainLayout/MainLayout'

export const HomePage = () => {
  return (
    <React.Fragment>
      <MainLayout />
      <MovieMenu
        func={fetchPopularMovies}
        heading='Popular'
        pathname='/movies'
      />
      <MovieMenu
        func={fetchTopRatedMovies}
        heading='Top Rated'
        pathname='/top-rated'
      />
    </React.Fragment>
  )
}
