import React from 'react'

import classes from './Button.module.css'

const Button = ({ title, onBtnClick }) => {
  return (
    <button onClick={onBtnClick} className={classes.button}>
      {title}
    </button>
  )
}

export default Button
