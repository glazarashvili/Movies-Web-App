import React from 'react'

import classes from './Popup.module.css'

const Popup = ({ title, language, date, desc, hover, position }) => {
  return (
    <div className={`${classes.popup} ${hover} ${position}`}>
      <div className={classes.heading}>
        <h1 className={classes.title}>{title}</h1>
        <p>{language}</p>
      </div>
      <p>
        <span>Release Date:</span> {date}
      </p>
      <p>
        <span>Description:</span> {desc}
      </p>
    </div>
  )
}

export default Popup
