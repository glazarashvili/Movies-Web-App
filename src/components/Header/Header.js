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

  const bgColor = offset < 350 ? 'transparent' : 'rgb(180, 180, 180)'

  return (
    <div className={classes['header-bar']} style={{ background: bgColor }}>
      <h1 className={classes.heading}>Cinemania</h1>
      <nav className={classes['header-navigation']}>
        <div>
          <img src={movieSvg} alt='movieSvg' />
          <p>Movies</p>
        </div>
        <div>
          <img src={tvSvg} alt='tvSvg' />
          <p>TV</p>
        </div>
        <div>
          <img src={theaterSvg} alt='theaterSvg' />
          <p>Cinemania</p>
        </div>
        <div>
          <img src={arrowSvg} alt='arrowSvg' />
          <p>TV Shows</p>
        </div>
        <div>
          <img src={circleSvg} alt='circleSvg' />
          <p>Player</p>
        </div>
      </nav>
    </div>
  )
}

export default Header
