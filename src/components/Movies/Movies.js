import React from 'react'
import MovieItem from './Movie/MovieItem'

import { fetchMovies } from '../../service/index'

import classes from './Movies.module.css'
import Loading from '../../ui/Loading'

const Movies = () => {
  const [movies, setMovies] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [, setWindowWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
  }, [])

  React.useEffect(() => {
    setLoading(true)
    const fetchAPI = async () => {
      setMovies(await fetchMovies())
      setLoading(false)
    }
    fetchAPI()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className={classes['movies-menu']}>
      {movies.length &&
        movies.map(movie => {
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
        })}
    </div>
  )
}

export default Movies
