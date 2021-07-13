import React from 'react'

import Popup from './Popup'

import classes from './MovieItem.module.css'
import PlayerSvg from '../SVG/PlayerSvg'
import { Link } from 'react-router-dom'

const MovieItem = ({
  date,
  desc,
  title,
  image,
  actors,
  country,
  duration,
  leftPosition,
  rightPosition,
}) => {
  const refContainer = React.useRef()

  let offset =
    refContainer?.current?.offsetLeft - 500 < 0
      ? leftPosition
      : refContainer?.current?.offsetLeft + 700 > window.innerWidth
      ? rightPosition
      : refContainer?.current?.offsetLeft - 1000 < 0
      ? leftPosition
      : leftPosition

  const [position, setPosition] = React.useState(null)
  React.useEffect(() => {
    setPosition(offset)
  }, [offset])

  return (
    <Link to='/movies/:id'>
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
    </Link>
  )
}

export default MovieItem
