import React from 'react'
import Movies from '../components/Movies/Movies'

import { fetchPopularMovies } from '../service/index'

export const MoviesPage = () => {
  return (
    <div style={{ marginTop: '74px' }}>
      <Movies func={fetchPopularMovies} />
    </div>
  )
}
