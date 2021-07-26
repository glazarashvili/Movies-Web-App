import React from 'react'

import classes from './SearchPopup.module.css'

import { posterUrl } from '../../../../service/index'

const SearchPopup = ({
  className,
  popupShown,
  animationClass,
  searchedMovies,
}) => {
  const popupWidth = window.innerWidth / 2

  return (
    <React.Fragment>
      <div className={`${classes['search-popup']} ${animationClass}`}>
        {/* <img
          src='https://bmscontent1.adjarabet.com/9062/Untitled-13.jpg'
          alt='adv-poster'
          style={{ width: popupWidth, border: '5px' }}
        /> */}
        <div style={{ width: popupWidth, border: '5px' }}>
          {searchedMovies.map(elem => {
            return (
              <img
                className={classes['movie-poster']}
                src={posterUrl + elem?.poster_path}
                alt='searched-poster'
              />
            )
          })}
        </div>
      </div>
      <div
        onClick={popupShown}
        className={`${className} ${animationClass}`}></div>
    </React.Fragment>
  )
}

export default SearchPopup
