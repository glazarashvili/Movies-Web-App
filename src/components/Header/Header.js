import React from 'react'

import tvSvg from '../../assets/svg/tv.svg'
import arrowSvg from '../../assets/svg/circle.svg'
import circleSvg from '../../assets/svg/arrow.svg'
import movieSvg from '../../assets/svg/movie.svg'
import theaterSvg from '../../assets/svg/theater.svg'

import classes from './Header.module.css'

import { NavLink } from 'react-router-dom'

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
      <NavLink to='/'>
        <h1 className={`${classes.heading} ${classes.filter}`}>Cinemania</h1>
      </NavLink>
      <nav className={classes['header-navigation']}>
        <NavLink to='/movies'>
          <div className={classes.filter}>
            <img src={movieSvg} alt='movieSvg' />
            <p>Movies</p>
          </div>
        </NavLink>
        <NavLink to='/tv'>
          <div className={classes.filter}>
            <img src={tvSvg} alt='tvSvg' />
            <p>TV</p>
          </div>
        </NavLink>
        <NavLink to='/cinemania'>
          <div className={classes.filter}>
            <img src={theaterSvg} alt='theaterSvg' />
            <p>CINEMANIA</p>
          </div>
        </NavLink>
        <NavLink to='/tvshows'>
          <div className={classes.filter}>
            <img src={arrowSvg} alt='arrowSvg' />
            <p>TV SHOWS</p>
          </div>
        </NavLink>
        <NavLink to='/player'>
          <div className={classes.filter}>
            <img src={circleSvg} alt='circleSvg' />
            <p>PLAYER</p>
          </div>
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
