import React from 'react'

import classes from './SearchInput.module.css'

const SearchInput = ({ onFocus, zIndex, movieValue, onChange }) => {
  // const [movieValue, setMovieValue] = React.useState('')

  return (
    <input
      type='search'
      onFocus={onFocus}
      placeholder='Search...'
      style={{ zIndex: zIndex }}
      value={movieValue}
      onChange={onChange}
      className={classes['search-input']}
    />
  )
}

export default SearchInput
