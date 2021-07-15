import React from 'react'

import classes from './MainLayout.module.css'

import { fetchMovies } from '../../service'

import Search from './Search/Search'
import ArrowBack from '../SVG/ArrowBack'
import ArrowForward from '../SVG/ArrowForward'

const MainLayout = () => {
  const [posterIndex, setPosterIndex] = React.useState(0)
  const [layoutMovies, setLayoutMovies] = React.useState([])

  const randomPicIndex = Math.floor(Math.random() * 7)

  const nextButtonClicked = () => {
    if (randomPicIndex > 7) {
      setPosterIndex(0)
    } else {
      setPosterIndex(prevState => prevState + 1)
    }
  }

  const prevButtonClicked = () => {
    if (randomPicIndex < 0) {
      setPosterIndex(7)
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

  const imageSrc = layoutMovies[randomPicIndex]?.poster

  return (
    <div className={classes.layout}>
      <div
        className={classes['main-layout']}
        style={{
          height: window.innerHeight / 2,
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${imageSrc}) no-repeat center center/cover`,
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
      <div>
        <Search />
      </div>
    </div>
  )
}

export default MainLayout
