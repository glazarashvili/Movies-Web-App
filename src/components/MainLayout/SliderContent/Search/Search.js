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
  const [movieValue, setMovieValue] = React.useState('')
  const shouldRenderChild = useDelayUnmount(isMounted, 400)

  React.useEffect(() => {
    const searchMovie = async () => {
      setTimeout(() => {
        if (movieValue) {
          axios
            .get(`${url}/search/movie?query=${movieValue}&api_key=${apiKey}`)
            .then(response => {
              console.log(response)
              setSearchedMovies(response.data.results.slice(0, 12))
            })
        }
      }, 1000)
    }

    searchMovie()
  }, [movieValue])

  return (
    <div className={classes['search-bar']}>
      <SearchInput
        zIndex={isMounted ? 2000 : 0}
        onFocus={() => setIsMounted(true)}
        movieValue={movieValue}
        onChange={e => setMovieValue(e.target.value)}
      />
      <SearchIcon
        zIndex={isMounted ? 2000 : 0}
        onSearchIconClick={() => setIsMounted(true)}
      />
      {shouldRenderChild && (
        <SearchPopup
          id={searchedMovies.id}
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
