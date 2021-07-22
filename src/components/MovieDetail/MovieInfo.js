import React from 'react'

import classes from './MovieInfo.module.css'

const MovieInfo = ({ poster, movieInfo }) => {
  return (
    <div className={classes['movie-item']}>
      <div className={classes['movie-info']}>
        <img
          className={classes['movie-poster']}
          src={poster}
          alt='movie-poster'
        />
        <div className={classes['movie-description']}>
          <ul>
            {movieInfo.map(movie => {
              return (
                <li key={movie.name}>
                  {movie.name} <p>{movie.prop}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo
