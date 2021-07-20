import React from 'react'

import classes from './Popup.module.css'

const Popup = ({ title, language, ranking, date, desc, hover, position }) => {
  return (
    <div className={`${classes.popup} ${hover} ${position}`}>
      <section>
        <div className={classes.heading}>
          <h1 className={classes.title}>{title}</h1>
          <h1 className={classes.language}>{language}</h1>
        </div>
        <div>
          <p>
            <span>Release Date:</span> {date}
          </p>
          <p className={classes.description}>
            <span>Description:</span> {desc}
          </p>
        </div>
        <div className={classes.ranking}>
          <span>IMDB:</span>
          <p>{ranking}</p>
        </div>
      </section>
    </div>
  )
}

export default Popup
