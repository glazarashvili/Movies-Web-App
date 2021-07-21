import React from 'react'

import classes from './MoviePoster.module.css'

const MoviePoster = ({ poster }) => {
  return (
    <div>
      <img
        className={classes['movie-poster']}
        src={poster}
        alt='movie-poster'
      />
    </div>
  )
}

export default MoviePoster
