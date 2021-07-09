import React from 'react'

import Popup from './Popup'

import classes from './MovieItem.module.css'
import PlayerSvg from '../SVG/PlayerSvg'

const MovieItem = ({ date, actors, desc, country, title, duration, image }) => {
  return (
    <div>
      <div className={classes['movie-item']}>
        <img className={classes.poster} src={image} alt='poster' />
        <div className={classes.background}>
          <PlayerSvg className={classes['player-icon']} />
        </div>
        <Popup
          hover={classes.popup}
          date={date}
          actors={actors}
          desc={desc}
          country={country}
          title={title}
          duration={duration}
        />
      </div>
    </div>
  )
}

export default MovieItem
