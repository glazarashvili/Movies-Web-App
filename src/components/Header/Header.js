import React from 'react'

import tvSvg from '../../assets/svg/tv.svg'
import arrowSvg from '../../assets/svg/circle.svg'
import circleSvg from '../../assets/svg/arrow.svg'
import movieSvg from '../../assets/svg/movie.svg'
import theaterSvg from '../../assets/svg/theater.svg'

import classes from './Header.module.css'

const Header = () => {
  const [offset, setOffset] = React.useState(0)
  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])

  const bgColor = offset < 80 ? 'transparent' : 'rgba(36, 36, 24, 0.9)'

  return (
    <div className={classes['header-bar']} style={{ background: bgColor }}>
      <h1 className={`${classes.heading} ${classes.filter}`}>Cinemania</h1>
      <nav className={classes['header-navigation']}>
        <div className={classes.filter}>
          <img src={movieSvg} alt='movieSvg' />
          <p>Movies</p>
        </div>
        <div className={classes.filter}>
          <img src={tvSvg} alt='tvSvg' />
          <p>TV</p>
        </div>
        <div className={classes.filter}>
          <img src={theaterSvg} alt='theaterSvg' />
          <p>CINEMANIA</p>
        </div>
        <div className={classes.filter}>
          <img src={arrowSvg} alt='arrowSvg' />
          <p>TV SHOWS</p>
        </div>
        <div className={classes.filter}>
          <img src={circleSvg} alt='circleSvg' />
          <p>PLAYER</p>
        </div>
      </nav>
    </div>
  )
}

export default Header
