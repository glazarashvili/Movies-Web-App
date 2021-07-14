import React from 'react'
import MovieItem from './MovieItem'

import { fetchMovies } from '../../service/index'

import classes from './Movies.module.css'

const Movies = () => {
  const [, setWindowWidth] = React.useState(window.innerWidth)
  const [movies, setMovies] = React.useState([])

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
  }, [])

  React.useEffect(() => {
    const fetchAPI = async () => {
      setMovies(await fetchMovies())
    }
    fetchAPI()
  }, [])

  console.log('movies', movies)

  return (
    <div className={classes['movies-menu']}>
      {movies.length
        ? movies.map(movie => {
            return (
              <MovieItem
                key={movie.id}
                desc={movie.desc}
                image={movie.image}
                title={movie.title}
                language={movie.language}
                date={movie.release_date}
                ranking={movie.ranking}
                leftPosition={classes['left-position']}
                rightPosition={classes['right-position']}
              />
            )
          })
        : null}
    </div>
  )
}

export default Movies
