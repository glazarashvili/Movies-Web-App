import React from 'react'

import Search from './Search/Search'

import classes from './SliderContent.module.css'

const SliderContent = ({ movieTitle, children }) => {
  return (
    <div className={classes['slider-content-container']}>
      <div className={classes['slider-text-content']}>
        <h1 className={classes['movie-title']}>{movieTitle}</h1>
        {children}
      </div>
      <Search />
    </div>
  )
}

export default SliderContent
