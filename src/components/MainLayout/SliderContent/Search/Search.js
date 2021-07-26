import React from 'react'

import SearchPopup from './SearchPopup'
import SearchInput from './SearchInput'
import SearchIcon from '../../../SVG/SearchIcon'

import axios from 'axios'

import { url, apiKey } from '../../../../service/index'

import classes from './Search.module.css'
import { useDelayUnmount } from '../../../../hooks/useDelayUnmount'

const Search = () => {
  const [isMounted, setIsMounted] = React.useState(false)
  const [searchedMovies, setSearchedMovies] = React.useState([])
  const shouldRenderChild = useDelayUnmount(isMounted, 400)

  const searchMovie = e => {
    console.log(e.target.value)
    if (e.target.value.length > 3) {
      axios
        .get(`${url}/search/movie?query=${e.target.value}&api_key=${apiKey}`)
        .then(response => {
          console.log(response)
          setSearchedMovies(response.data.results)
        })
    }
  }

  return (
    <div className={classes['search-bar']}>
      <SearchInput
        zIndex={isMounted ? 2000 : 0}
        onFocus={() => setIsMounted(true)}
        searchMovie={searchMovie}
      />
      <SearchIcon
        zIndex={isMounted ? 2000 : 0}
        onSearchIconClick={() => setIsMounted(true)}
      />
      {shouldRenderChild && (
        <SearchPopup
          className={`${classes.backdrop}`}
          searchedMovies={searchedMovies}
          animationClass={`${
            isMounted ? classes['fade-animation'] : classes['hide-animation']
          }`}
          popupShown={() => {
            setIsMounted(false)
          }}
        />
      )}
    </div>
  )
}

export default Search
