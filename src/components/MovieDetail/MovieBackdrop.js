import React from 'react'

import classes from './MovieCard.module.css'

const MovieBackdrop = ({ backdrop, movieTitle, ranking }) => {
  const background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${backdrop}) no-repeat center center/cover`

  return (
    <div className={classes['movie-card']} style={{ background: background }}>
      <div className={classes['movie-content']}>
        <h1 className={classes['movie-title']}>{movieTitle}</h1>
        <div className={classes['movie-ranking']}>
          <h1>IMDb</h1>
          <p>{ranking}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieBackdrop
