import React from 'react'

import Popup from './Popup'

import poster from '../../assets/posters/minpost.jpg'

import classes from './MovieItem.module.css'
import PlayerSvg from '../SVG/PlayerSvg'

const MovieItem = ({ date, actors, desc, country, title, duration }) => {
  return (
    <div>
      <div className={classes['movie-item']}>
        <img className={classes.poster} src={poster} alt='poster' />
        <div className={classes.background}>
          <PlayerSvg className={classes['player-icon']} />
          <Popup
            date={date}
            actors={actors}
            desc={desc}
            country={country}
            title={title}
            duration={duration}
          />
        </div>
      </div>
    </div>
  )
}

export default MovieItem
