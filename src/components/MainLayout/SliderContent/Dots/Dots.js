import React from 'react'

import classes from './Dots.module.css'

const Dots = () => {
  return (
    <ul className={classes['dots-container']}>
      <li className={classes.dots}></li>
      <li className={classes.dots}></li>
      <li className={classes.dots}></li>
      <li className={classes.dots}></li>
      <li className={classes.dots}></li>
    </ul>
  )
}

export default Dots
