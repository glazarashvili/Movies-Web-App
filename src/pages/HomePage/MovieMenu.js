import React from 'react'
import Movies from '../../components/Movies/Movies'

import classes from './MovieMenu.module.css'

const MovieMenu = ({ func, type }) => {
  return (
    <section className={classes['movie-menu']}>
      <div className={classes.div}>
        <h1>POPULAR</h1>
        <h1>SHOW ALL</h1>
      </div>
      <Movies quantity={15} func={func} />
    </section>
  )
}

export default MovieMenu
