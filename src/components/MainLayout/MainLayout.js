import React from 'react'

import classes from './MainLayout.module.css'

import posters from './index'
import ArrowForward from '../SVG/ArrowForward'
import ArrowBack from '../SVG/ArrowBack'
import Input from './Input'
import SearchIcon from '../SVG/SearchIcon'

const MainLayout = () => {
  const [posterIndex, setPosterIndex] = React.useState(0)
  let intViewportHeight = window.innerHeight

  const nextButtonClicked = () => {
    if (posterIndex > posters.length - 2) {
      setPosterIndex(0)
    } else if (posterIndex >= 0 && posterIndex < posters.length) {
      setPosterIndex(prevState => prevState + 1)
    }
  }

  const prevButtonClicked = () => {
    if (posterIndex < 1) {
      setPosterIndex(posters.length - 1)
    } else if (posterIndex >= 0 && posterIndex < posters.length) {
      setPosterIndex(prevState => prevState - 1)
    }
  }

  return (
    <div
      className={classes['main-layout']}
      style={{ height: intViewportHeight / 2 }}>
      <img
        style={{
          backgroundSize: 'hover',
          height: '100%',
          objectFit: 'cover',
          width: '100%',
        }}
        src={posters[posterIndex].url}
        alt='poster'
      />
      <ArrowBack
        className={classes.arrowBack}
        buttonClickHandler={prevButtonClicked}
      />
      <ArrowForward
        className={classes.arrowForward}
        buttonClickHandler={nextButtonClicked}
      />
      <div className={classes['search-bar']}>
        <Input />
        <SearchIcon />
      </div>
    </div>
  )
}

export default MainLayout
