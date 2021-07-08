import React from 'react'

import classes from './Popup.module.css'

const Popup = () => {
  return (
    <div className={classes.popup}>
      <div className={classes.heading}>
        <h1 className={classes.title}>French Exit</h1>
        <p>1.56</p>
      </div>
      <p>
        <span>Release Date:</span> 2012
      </p>
      <p>
        <span>Country:</span> US
      </p>
      <p>
        <span>Roles:</span> Bradd Pitt, Matt Damon
      </p>
      <p>
        <span>Description:</span> ...
      </p>
    </div>
  )
}

export default Popup
