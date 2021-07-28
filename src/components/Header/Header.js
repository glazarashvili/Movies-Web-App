import React from 'react'

import { Link, NavLink, useLocation } from 'react-router-dom'

import classes from './Header.module.css'

import TvSvg from '../SVG/TvSvg'
import MovieSvg from '../SVG/MovieSvg'
import CinemaSvg from '../SVG/CinemaSvg'
import TvShowsSvg from '../SVG/TvShowsSvg'

import Template from '../../ui/Template'

const Header = () => {
  const [offset, setOffset] = React.useState(0)

  const location = useLocation()

  React.useEffect(() => {
    if (location.pathname === '/home') {
      window.onscroll = () => {
        setOffset(window.pageYOffset)
      }
    } else {
      setOffset(0)
    }
  }, [location.pathname])

  const check = offset < 80 && location.pathname === '/home'
  const fill = check ? '#fff' : '#495057'
  const bgColor = check ? 'transparent' : '#fff'
  const fontColor = check ? classes['before-scroll'] : classes['after-scroll']

  return (
    <div
      className={classes.header}
      style={{
        background: bgColor,
        transition: 'background 0.3s linear',
      }}>
      <Template className={classes['header-bar']}>
        <Link to='/'>
          <h1 className={`${classes.heading} ${fontColor}`}>MovieDB</h1>
        </Link>
        <nav className={classes['header-navigation']}>
          <NavLink to='/movies'>
            <div className={classes['nav-item']}>
              <MovieSvg fill={fill} />
              <p className={fontColor}>POPULAR</p>
            </div>
          </NavLink>
          <NavLink to='/top-rated'>
            <div className={classes['nav-item']}>
              <TvSvg fill={fill} />
              <p className={fontColor}>TOP</p>
            </div>
          </NavLink>
          <NavLink to='/newmovies'>
            <div className={classes['nav-item']}>
              <TvShowsSvg fill={fill} />
              <p className={fontColor}>PREMIERE</p>
            </div>
          </NavLink>
          <NavLink to='/tvshows'>
            <div className={classes['nav-item']}>
              <CinemaSvg fill={fill} />
              <p className={fontColor}>TV SHOWS</p>
            </div>
          </NavLink>
        </nav>
      </Template>
    </div>
  )
}

export default Header
