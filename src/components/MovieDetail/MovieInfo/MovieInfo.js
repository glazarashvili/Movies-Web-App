import React from 'react'

import classes from './MovieInfo.module.css'

const MovieInfo = ({ poster }) => {
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

export default MovieInfo
