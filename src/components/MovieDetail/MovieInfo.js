import React from 'react'

import classes from './MovieInfo.module.css'

const MovieInfo = ({
  poster,
  release,
  country,
  genres,
  revenue,
  description,
}) => {
  return (
    <div className={classes['movie-item']}>
      <div className={classes['movie-info']}>
        <img
          className={classes['movie-poster']}
          src={poster}
          alt='movie-poster'
        />
        <div className={classes['movie-description']}>
          <p>
            Release Date <span>{release}</span>
          </p>
          <p>
            Country <span>{country}</span>
          </p>
          <p>
            Genres <span>{genres}</span>
          </p>
          <p>
            Revenue <span>{revenue}</span>
          </p>
          <p>
            Description <span>{description}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo
