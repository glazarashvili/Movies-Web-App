import React from 'react'

import { Link, NavLink, useLocation } from 'react-router-dom'

import classes from './Header.module.css'

import TvSvg from '../SVG/TvSvg'
import MovieSvg from '../SVG/MovieSvg'
import CinemaSvg from '../SVG/CinemaSvg'
import TvShowsSvg from '../SVG/TvShowsSvg'

const Header = () => {
  const [offset, setOffset] = React.useState(0)
  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])

  const location = useLocation()

  const check = offset < 80 && location.pathname === '/home'
  const fill = check ? '#fff' : '#495057'
  const bgColor = check ? 'transparent' : '#fff'
  const fontColor = check ? classes['before-scroll'] : classes['after-scroll']

  return (
    <div
      className={classes.header}
      style={{ background: bgColor, transition: 'background 0.3s linear' }}>
      <div className={classes['header-bar']}>
        <Link to='/'>
          <h1 className={`${classes.heading} ${fontColor}`}>MovieDB</h1>
        </Link>
        <nav className={classes['header-navigation']}>
          <NavLink activeClassName={classes['nav-link']} to='/movies'>
            <div className={classes['nav-item']}>
              <MovieSvg fill={fill} />
              <p className={fontColor}>MOVIES</p>
            </div>
          </NavLink>
          <NavLink to='/tv' activeClassName={classes['nav-link']}>
            <div className={classes['nav-item']}>
              <TvSvg fill={fill} />
              <p className={fontColor}>TV</p>
            </div>
          </NavLink>
          <NavLink to='/cinemania' activeClassName={classes['nav-link']}>
            <div className={classes['nav-item']}>
              <TvShowsSvg fill={fill} />
              <p className={fontColor}>CINEMANIA</p>
            </div>
          </NavLink>
          <NavLink to='/tvshows' activeClassName={classes['nav-link']}>
            <div className={classes['nav-item']}>
              <CinemaSvg fill={fill} />
              <p className={fontColor}>TV SHOWS</p>
            </div>
          </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Header
