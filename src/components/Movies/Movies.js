import React from 'react'
import MovieItem from './Movie/MovieItem'

import classes from './Movies.module.css'
import Loading from '../../ui/Loading'

const Movies = ({ func, moviesType, quantity }) => {
  const [movies, setMovies] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
  }, [windowWidth])

  React.useEffect(() => {
    setLoading(true)
    const fetchAPI = async () => {
      setMovies(await func())
      setLoading(false)
    }
    fetchAPI()
  }, [func])

  if (loading) return <Loading />

  return (
    <section>
      <div className={classes['movies-type']}>{moviesType}</div>
      <div className={classes['movies-menu']}>
        {movies.length &&
          movies.slice(0, quantity).map(movie => {
            return (
              <MovieItem
                key={movie.id}
                desc={movie.desc}
                image={movie.image}
                title={movie.title}
                movieId={movie.id}
                ranking={movie?.ranking}
                date={movie.release_date}
                language={movie.language}
                leftPosition={classes['left-position']}
                rightPosition={classes['right-position']}
              />
            )
          })}
      </div>
    </section>
  )
}

export default Movies
