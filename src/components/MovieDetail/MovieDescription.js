import React from 'react'

import MoviePoster from './MoviePoster'

import classes from './MovieDescription.module.css'

const MovieDescription = ({ poster }) => {
  return (
    <div>
      <MoviePoster poster={poster} />
    </div>
  )
}

export default MovieDescription
