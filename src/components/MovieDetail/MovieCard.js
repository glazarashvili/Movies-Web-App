import React from 'react'

import classes from './MovieCard.module.css'

const MovieCard = ({ backImage }) => {
  const background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${backImage}) no-repeat center center/cover`

  return (
    <div
      className={classes['movie-card']}
      style={{ background: background }}></div>
  )
}

export default MovieCard
