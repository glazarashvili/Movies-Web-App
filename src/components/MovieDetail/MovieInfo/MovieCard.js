import React from 'react'

import classes from './MovieCard.module.css'

// import PlayerSvg from '../../SVG/PlayerSvg'
import Template from '../../../ui/Template'

const MovieCard = ({ backdrop, movieTitle, ranking, showModal }) => {
  const background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${backdrop}) no-repeat center center/cover`

  return (
    <div className={classes['movie-card']} style={{ background: background }}>
      {/* <div className={classes['trailer-logo']} onClick={showModal}>
        <PlayerSvg />
      </div> */}
      <Template className={classes['movie-content']}>
        <h1 className={classes['movie-title']}>{movieTitle}</h1>
        <div className={classes['movie-ranking']}>
          <h1>IMDB</h1>
          <p>{ranking}</p>
        </div>
      </Template>
    </div>
  )
}

export default MovieCard
