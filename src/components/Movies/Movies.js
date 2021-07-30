import React from 'react'
import MovieItem from './Movie/MovieItem'

import { defaultPoster } from '../../service/index'

import Loading from '../../UI/Loading'
import classes from './Movies.module.css'

const Movies = ({ func, quantity }) => {
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
    <section className={classes['movies-section']}>
      <div className={classes['movies-menu']}>
        {movies.length &&
          movies.slice(0, quantity).map(movie => {
            return (
              <MovieItem
                key={movie.id}
                desc={movie.desc}
                movieId={movie.id}
                title={movie.title}
                ranking={movie.ranking}
                date={movie.release_date}
                language={movie.language}
                image={movie.image || defaultPoster}
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
