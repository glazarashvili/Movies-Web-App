import React from 'react'

import Popup from './Popup'

import classes from './MovieItem.module.css'
import PlayerSvg from '../SVG/PlayerSvg'

const MovieItem = ({
  date,
  actors,
  desc,
  country,
  title,
  duration,
  image,
  leftPosition,
  rightPosition,
}) => {
  const refContainer = React.useRef()

  const position =
    refContainer?.current?.offsetLeft - 500 < 0
      ? leftPosition
      : refContainer?.current?.offsetLeft + 230 > window.innerWidth
      ? rightPosition
      : refContainer?.current?.offsetLeft + 700 > window.innerWidth
      ? rightPosition
      : refContainer?.current?.offsetLeft - 1000 < 0
      ? leftPosition
      : rightPosition

  return (
    <div ref={refContainer}>
      <div className={classes['movie-item']}>
        <img className={classes.poster} src={image} alt='poster' />
        <div className={classes.background}>
          <PlayerSvg className={classes['player-icon']} />
        </div>
        <Popup
          desc={desc}
          date={date}
          title={title}
          actors={actors}
          country={country}
          duration={duration}
          position={position}
          hover={classes.popup}
        />
      </div>
    </div>
  )
}

export default MovieItem
