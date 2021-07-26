import React from 'react'

import classes from './SearchPopup.module.css'

import { Link } from 'react-router-dom'

import { posterUrl, defaultPoster } from '../../../../service/index'

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

        <div
          style={{ width: popupWidth, border: '5px' }}
          className={classes['movie-posters']}>
          {searchedMovies.map(elem => {
            return (
              <Link to={`/movies/${elem.id}`}>
                <img
                  key={elem.id}
                  className={classes['movie-poster']}
                  src={
                    elem.poster_path
                      ? posterUrl + elem.poster_path
                      : defaultPoster
                  }
                  alt='searched-poster'
                />
              </Link>
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
