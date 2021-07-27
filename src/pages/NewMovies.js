import React from 'react'

import Movies from '../components/Movies/Movies'

import { fetchNewMovies } from '../service/index'

export const NewMovies = () => {
  return (
    <div style={{ marginTop: '74px' }}>
      <Movies func={fetchNewMovies} quantity={20} />
    </div>
  )
}

export default NewMovies
