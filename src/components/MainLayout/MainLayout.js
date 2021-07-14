import React from 'react'

import classes from './MainLayout.module.css'

import posters from './index'
import SearchInput from './SearchInput'
import ArrowBack from '../SVG/ArrowBack'
import SearchIcon from '../SVG/SearchIcon'
import ArrowForward from '../SVG/ArrowForward'

const MainLayout = () => {
  const [popupShown, setPopupShown] = React.useState(false)
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
    <div className={classes.layout}>
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
      </div>
      <div className={classes['search-bar']}>
        <SearchInput
          zIndex={popupShown ? 2000 : ''}
          onFocus={() => setPopupShown(true)}
        />
        <SearchIcon />
        {popupShown && (
          <React.Fragment>
            <div className={classes['search-popup']}>
              <img
                src='https://bmscontent1.adjarabet.com/9062/Untitled-13.jpg'
                alt='adv-poster'
              />
            </div>
            <div
              onClick={() => setPopupShown(false)}
              className={classes.backdrop}></div>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default MainLayout
