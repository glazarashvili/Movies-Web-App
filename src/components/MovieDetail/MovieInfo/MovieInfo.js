import React from 'react'

import classes from './MovieInfo.module.css'

import Modal from '../../../ui/Modal'

import Template from '../../../ui/Template'

const MovieInfo = ({ poster, movieInfo, videoLink }) => {
  return (
    <div className={classes['movie-item']}>
      <Template className={classes['movie-info']}>
        <div>
          <img
            className={classes['movie-poster']}
            src={poster}
            alt='movie-poster'
          />
          <Modal videoLink={videoLink} />
          {/* <section></section> */}
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
    </div>
  )
}

export default MovieInfo
