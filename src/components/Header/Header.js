import React from 'react'

import { NavLink, useLocation } from 'react-router-dom'

import classes from './Header.module.css'

import tvSvg from '../../assets/svg/tv.svg'
import movieSvg from '../../assets/svg/movie.svg'
import arrowSvg from '../../assets/svg/circle.svg'
import circleSvg from '../../assets/svg/arrow.svg'
import theaterSvg from '../../assets/svg/theater.svg'

const Header = () => {
  const [offset, setOffset] = React.useState(0)
  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])

  const location = useLocation()

  const bgColor =
    offset < 80 && location.pathname === '/home'
      ? 'transparent'
      : 'rgba(36, 36, 24, 0.9)'

  return (
    <div className={classes['header-bar']} style={{ background: bgColor }}>
      <NavLink to='/home' activeClassName={classes['nav-link']}>
        <h1 className={`${classes.heading} ${classes.filter}`}>Cinemania</h1>
      </NavLink>
      <nav className={classes['header-navigation']}>
        <NavLink to='/movies' activeClassName={classes['nav-link']}>
          <div className={classes.filter}>
            <img src={movieSvg} alt='movieSvg' />
            <p>Movies</p>
          </div>
        </NavLink>
        <NavLink activeClassName={classes['nav-link']} to='/tv'>
          <div className={classes.filter}>
            <img src={tvSvg} alt='tvSvg' />
            <p>TV</p>
          </div>
        </NavLink>
        <NavLink to='/cinemania' activeClassName={classes['nav-link']}>
          <div className={classes.filter}>
            <img src={theaterSvg} alt='theaterSvg' />
            <p>CINEMANIA</p>
          </div>
        </NavLink>
        <NavLink to='/tvshows' activeClassName={classes['nav-link']}>
          <div className={classes.filter}>
            <img src={arrowSvg} alt='arrowSvg' />
            <p>TV SHOWS</p>
          </div>
        </NavLink>
        <NavLink to='/player' activeClassName={classes['nav-link']}>
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
