import React from 'react'

import classes from './Button.module.css'

const Button = ({ title, onBtnClick, disabled }) => {
  return (
    <button disabled={disabled} onClick={onBtnClick} className={classes.button}>
      {title}
    </button>
  )
}

export default Button
