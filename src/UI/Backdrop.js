import React from 'react'

import classes from './Backdrop.module.css'

const Backdrop = ({ backdropClick }) => {
  return <div onClick={backdropClick} className={classes.backdrop}></div>
}

export default Backdrop
