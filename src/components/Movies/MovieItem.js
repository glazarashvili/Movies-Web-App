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

  React.useEffect(() => {
    console.log(refContainer.current.offsetLeft)
  })

  console.log('xxxx', window.innerWidth)

  console.log(refContainer?.current?.offsetLeft + 230 > window.innerWidth)

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
          hover={classes.popup}
          position={
            refContainer?.current?.offsetLeft - 230 < 50
              ? leftPosition
              : refContainer?.current?.offsetLeft + 230 > window.innerWidth
              ? rightPosition
              : rightPosition
          }
        />
      </div>
    </div>
  )
}

export default MovieItem
