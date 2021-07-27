import React from 'react'

import { fetchTopRatedMovies } from '../service/index'

import Movies from '../components/Movies/Movies'

export const TopRatedMovies = () => {
  return (
    <div style={{ marginTop: '74px' }}>
      <Movies func={fetchTopRatedMovies} quantity={20} />
    </div>
  )
}
