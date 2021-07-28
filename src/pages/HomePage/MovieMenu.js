import React from 'react'
import { Link } from 'react-router-dom'
import Movies from '../../components/Movies/Movies'

import classes from './MovieMenu.module.css'

const MovieMenu = ({ func, heading, pathname }) => {
  return (
    <section className={classes['movie-menu']}>
      <Link to={pathname}>
        <h1 className={classes.heading}>{heading}</h1>
      </Link>
      <Movies quantity={15} func={func} />
    </section>
  )
}

export default MovieMenu
