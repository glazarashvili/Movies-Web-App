import React from 'react'

import classes from './SearchInput.module.css'

const SearchInput = ({ onFocus, onBlur, zIndex, movieValue, onChange }) => {
  return (
    <input
      type='search'
      onFocus={onFocus}
      onBlur={onBlur}
      value={movieValue}
      onChange={onChange}
      placeholder='Search...'
      style={{ zIndex: zIndex }}
      className={classes['search-input']}
    />
  )
}

export default SearchInput
