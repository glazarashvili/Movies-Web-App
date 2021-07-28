import React from 'react'

import classes from './SearchInput.module.css'

const SearchInput = ({ onFocus, zIndex, movieValue, onChange }) => {
  return (
    <input
      type='search'
      onFocus={onFocus}
      value={movieValue}
      onChange={onChange}
      placeholder='Search...'
      style={{ zIndex: zIndex }}
      className={classes['search-input']}
    />
  )
}

export default SearchInput
