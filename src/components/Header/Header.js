import React from 'react'

import { Link, NavLink, useLocation } from 'react-router-dom'

import classes from './Header.module.css'

import arrowSvg from '../../assets/svg/circle.svg'
import circleSvg from '../../assets/svg/arrow.svg'
import TvSvg from '../SVG/TvSvg'
import MovieSvg from '../SVG/MovieSvg'
import TvShowsSvg from '../SVG/TvShowsSvg'
import CinemaSvg from '../SVG/CinemaSvg'

const Header = () => {
  const [offset, setOffset] = React.useState(0)
  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])

  const location = useLocation()

  const bgColor =
    offset < 80 && location.pathname === '/home' ? 'transparent' : '#fff'

  const fill = offset < 80 && location.pathname === '/home' ? 'white' : 'black'

  // #2F83C6

  return (
    <div
      className={classes['header-bar']}
      style={{ background: bgColor, transition: 'background 0.3s linear' }}>
      <Link to='/home'>
        <h1 className={`${classes.heading}`}>Cinemania</h1>
      </Link>
      <nav className={classes['header-navigation']}>
        <NavLink to='/movies' activeClassName={classes['nav-link']}>
          <div>
            <TvSvg fill={fill} />
            <p>TV</p>
          </div>
        </NavLink>
        <NavLink activeClassName={classes['nav-link']} to='/tv'>
          <div>
            <MovieSvg fill={fill} />
            <p>MOVIES</p>
          </div>
        </NavLink>
        <NavLink to='/cinemania' activeClassName={classes['nav-link']}>
          <div>
            <TvShowsSvg fill={fill} />
            <p>CINEMANIA</p>
          </div>
        </NavLink>
        <NavLink to='/tvshows' activeClassName={classes['nav-link']}>
          <div className={classes.filter}>
            <CinemaSvg fill={fill} />
            <p>TV SHOWS</p>
          </div>
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
