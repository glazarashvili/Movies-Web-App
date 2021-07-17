import React from 'react'

import classes from './MainLayout.module.css'

import { fetchMovies } from '../../service'

import ArrowBack from '../SVG/ArrowBack'
import ArrowForward from '../SVG/ArrowForward'
import SliderContent from './SliderContent/SliderContent'

const MainLayout = () => {
  const [posterIndex, setPosterIndex] = React.useState(0)
  const [layoutMovies, setLayoutMovies] = React.useState([])

  console.log(posterIndex)

  const nextButtonClicked = () => {
    console.log(posterIndex)
    if (posterIndex > 3) {
      setPosterIndex(0)
    } else {
      setPosterIndex(prevState => prevState + 1)
    }
  }

  const prevButtonClicked = () => {
    console.log(posterIndex)
    if (posterIndex < 1) {
      setPosterIndex(4)
    } else {
      setPosterIndex(prevState => prevState - 1)
    }
  }

  React.useEffect(() => {
    const fetchAPI = async () => {
      setLayoutMovies(await fetchMovies())
    }
    fetchAPI()
  }, [])

  const layoutPoster = layoutMovies.slice(0, 5)[posterIndex]?.poster
  const movieTitle = layoutMovies.slice(0, 5)[posterIndex]?.title
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
