import React from 'react'

import classes from './MainLayout.module.css'

import { fetchOnGoingMovies } from '../../service'

import ArrowBack from '../SVG/ArrowBack'
import ArrowForward from '../SVG/ArrowForward'
import SliderContent from './SliderContent/SliderContent'

const dots = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

const MainLayout = () => {
  const [movieIndex, setMovieIndex] = React.useState(0)
  const [layoutMovies, setLayoutMovies] = React.useState([])

  React.useEffect(() => {
    const fetchAPI = async () => {
      setLayoutMovies(await fetchOnGoingMovies())
    }
    fetchAPI()
  }, [])

  const nextButtonClicked = () => {
    if (movieIndex > 3) {
      setMovieIndex(0)
    } else {
      setMovieIndex(prevState => prevState + 1)
    }
  }

  const prevButtonClicked = () => {
    if (movieIndex < 1) {
      setMovieIndex(4)
    } else {
      setMovieIndex(prevState => prevState - 1)
    }
  }

  const movie = layoutMovies.slice(0, 5)[movieIndex]
  const layoutPoster = movie?.poster
  const movieTitle = movie?.title
  const background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${layoutPoster}) no-repeat center center/cover`

  const dotsContainer = (
    <div className={classes['dots-container']}>
      {dots.map(dot => {
        return (
          <div
            onClick={() => setMovieIndex(dot.id)}
            key={dot.id}
            className={
              dot.id === movieIndex ? classes['active-dot'] : classes.dot
            }></div>
        )
      })}
    </div>
  )

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
      <SliderContent movieTitle={movieTitle} children={dotsContainer} />
    </div>
  )
}

export default MainLayout
