import React from 'react'

import Dots from './Dots/Dots'
import Search from './Search/Search'

import classes from './SliderContent.module.css'

const SliderContent = ({ movieTitle }) => {
  return (
    <div className={classes['slider-content-container']}>
      <div className={classes['slider-text-content']}>
        <h1 className={classes['movie-title']}>{movieTitle}</h1>
        <Dots />
      </div>
      <Search />
    </div>
  )
}

export default SliderContent
