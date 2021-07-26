import React from 'react'

import classes from './SearchInput.module.css'

import axios from 'axios'

import { url, apiKey } from '../../../../service/index'

const SearchInput = ({ onFocus, zIndex }) => {
  const searchMovie = e => {
    console.log(e.target.value)
    axios
      .get(`${url}/search/movie?query=${e.target.value}&api_key=${apiKey}`)
      .then(response => {
        console.log(response)
      })
  }

  return (
    <input
      type='search'
      onFocus={onFocus}
      placeholder='Search...'
      style={{ zIndex: zIndex }}
      onChange={searchMovie}
      className={classes['search-input']}
    />
  )
}

export default SearchInput
