import React from 'react'

import classes from './Popup.module.css'

const Popup = ({ title, duration, date, country, actors, desc }) => {
  return (
    <div className={classes.popup}>
      <div className={classes.heading}>
        <h1 className={classes.title}>{title}</h1>
        <p>{duration}</p>
      </div>
      <p>
        <span>Release Date:</span> {date}
      </p>
      <p>
        <span>Country:</span> {country}
      </p>
      <p>
        <span>Roles:</span> {actors}
      </p>
      <p>
        <span>Description:</span> {desc}
      </p>
    </div>
  )
}

export default Popup
