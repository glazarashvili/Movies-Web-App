import React from 'react'

import Search from './Search/Search'

import Template from '../../../ui/Template'

import classes from './SliderContent.module.css'

const SliderContent = ({ movieTitle, children }) => {
  return (
    <div className={classes['slider-content-container']}>
      <Template className={classes['slider-text-content']}>
        <h1 className={classes['movie-title']}>{movieTitle}</h1>
        {children}
      </Template>
      <Search />
    </div>
  )
}

export default SliderContent
