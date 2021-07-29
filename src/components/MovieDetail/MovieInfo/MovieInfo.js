import React from 'react'

import classes from './MovieInfo.module.css'

import Template from '../../../ui/Template'
import PostersModal from './Modals/PostersModal'
import TrailerModal from './Modals/TrailerModal'

const MovieInfo = ({ poster, movieInfo }) => {
  return (
    <section className={classes['movie-item']}>
      <Template className={classes['movie-info']}>
        <div className={classes['trailers-menu']}>
          <img
            className={classes['movie-poster']}
            src={poster}
            alt='movie-poster'
          />
        </div>
        <div className={classes['movie-description']}>
          {movieInfo.map(movie => {
            return (
              <p key={movie.name} className={classes['list-item']}>
                {movie.name}: <span>{movie.prop}</span>
              </p>
            )
          })}
        </div>
      </Template>
    </section>
  )
}

export default MovieInfo
