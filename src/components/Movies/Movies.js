import React from 'react'
import MovieItem from './MovieItem'

import classes from './Movies.module.css'

const DATA = [
  {
    id: 0,
    duration: '1,58',
    desc: '...',
    title: 'inception',
    date: 2019,
    country: 'US',
    img: '',
  },
  {
    id: 1,
    duration: '2.43',
    desc: '...',
    title: 'inception',
    date: 1992,
    country: 'US',
    img: '',
  },
  {
    id: 2,
    duration: '3.23',
    desc: '...',
    title: 'memento',
    date: 2019,
    country: 'Germany',
    img: '',
  },
  {
    id: 3,
    duration: '1.32',
    desc: '...',
    title: 'interstellar',
    date: 2019,
    country: 'UK',
    img: '',
  },
  {
    id: 4,
    duration: '2.31',
    desc: '...',
    title: 'inception',
    date: 2012,
    country: 'Denmark',
    img: '',
  },
]

const Movies = () => {
  return (
    <div className={classes['movies-menu']}>
      {DATA.map(movie => {
        return (
          <MovieItem
            key={movie.id}
            title={movie.title}
            desc={movie.desc}
            duration={movie.duration}
            date={movie.date}
            country={movie.country}
          />
        )
      })}
    </div>
  )
}

export default Movies
