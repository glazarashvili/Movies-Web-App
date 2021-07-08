import React from 'react'

import Popup from './Popup'

import poster from '../../assets/posters/minpost.jpg'

import classes from './Movie.module.css'
import PlayerSvg from '../SVG/PlayerSvg'

const MovieItem = () => {
  return (
    <div>
      <div className={classes['movie-item']}>
        <img className={classes.poster} src={poster} alt='poster' />
        <div className={classes.background}>
          <PlayerSvg className={classes['player-icon']} />
          <Popup />
        </div>
      </div>
    </div>
  )
}

export default MovieItem
