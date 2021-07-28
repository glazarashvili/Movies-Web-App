import React from 'react'
import { Link } from 'react-router-dom'

import Template from '../../../../ui/Template'

import classes from './SearchPopup.module.css'

import {
  posterUrl,
  popupPoster,
  defaultPoster,
} from '../../../../service/index'

const SearchPopup = ({
  className,
  popupShown,
  animationClass,
  searchedMovies,
}) => {
  // const popupWidth = window.innerWidth / 2

  return (
    <React.Fragment>
      <Template className={`${classes['search-popup']} ${animationClass}`}>
        {searchedMovies.length ? (
          <div className={classes['movie-posters']}>
            {searchedMovies.map(elem => {
              return (
                <Link key={elem.id} to={`/movies/${elem.id}`}>
                  <img
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
        ) : (
          <div className={classes['search-popup-poster']}>
            <img
              src={popupPoster}
              alt='adv-poster'
              className={classes['adv-poster']}
            />
          </div>
        )}
      </Template>
      <div
        onClick={popupShown}
        className={`${className} ${animationClass}`}></div>
    </React.Fragment>
  )
}

export default SearchPopup
