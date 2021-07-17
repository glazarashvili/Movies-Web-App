import React from 'react'

import classes from './MainLayout.module.css'

import { fetchMovies } from '../../service'

import ArrowBack from '../SVG/ArrowBack'
import ArrowForward from '../SVG/ArrowForward'
import SliderContent from './SliderContent/SliderContent'

const MainLayout = () => {
  const [movieIndex, setMovieIndex] = React.useState(0)
  const [layoutMovies, setLayoutMovies] = React.useState([])

  console.log(movieIndex)

  const nextButtonClicked = () => {
    console.log(movieIndex)
    if (movieIndex > 3) {
      setMovieIndex(0)
    } else {
      setMovieIndex(prevState => prevState + 1)
    }
  }

  const prevButtonClicked = () => {
    console.log(movieIndex)
    if (movieIndex < 1) {
      setMovieIndex(4)
    } else {
      setMovieIndex(prevState => prevState - 1)
    }
  }

  React.useEffect(() => {
    const fetchAPI = async () => {
      setLayoutMovies(await fetchMovies())
    }
    fetchAPI()
  }, [])

  const layoutPoster = layoutMovies.slice(0, 5)[movieIndex]?.poster
  const movieTitle = layoutMovies.slice(0, 5)[movieIndex]?.title
  const background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${layoutPoster}) no-repeat center center/cover`

  console.log('laymovies', layoutMovies.slice(0, 3))

  return (
    <div className={classes.layout}>
      <div
        className={classes['main-layout']}
        style={{
          height: window.innerHeight / 2,
          background: background,
        }}>
        <ArrowBack
          className={classes.arrowBack}
          buttonClickHandler={prevButtonClicked}
        />
        <ArrowForward
          className={classes.arrowForward}
          buttonClickHandler={nextButtonClicked}
        />
      </div>
      <SliderContent movieTitle={movieTitle} />
    </div>
  )
}

export default MainLayout
