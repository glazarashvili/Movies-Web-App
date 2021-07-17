import React from 'react'

import classes from './MainLayout.module.css'

import { fetchMovies } from '../../service'

import Search from './Search/Search'
import ArrowBack from '../SVG/ArrowBack'
import ArrowForward from '../SVG/ArrowForward'

const MainLayout = () => {
  const [posterIndex, setPosterIndex] = React.useState(0)
  const [layoutMovies, setLayoutMovies] = React.useState([])

  const nextButtonClicked = () => {
    // if() {
    //   setPosterIndex(prevState => prevState + 1)
    // }
  }

  const prevButtonClicked = () => {
    setPosterIndex(prevState => prevState + 1)
  }

  React.useEffect(() => {
    const fetchAPI = async () => {
      setLayoutMovies(await fetchMovies())
    }
    fetchAPI()
  }, [])

  const layoutPoster = layoutMovies.slice(0, 3)[posterIndex]?.poster
  const background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${layoutPoster}) no-repeat center center/cover`

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
      <Search />
    </div>
  )
}

export default MainLayout
