import React from 'react'

import classes from './SearchInput.module.css'

const SearchInput = ({ onFocus, onBlur, zIndex }) => {
  return (
    <input
      placeholder='Search...'
      type='search'
      onBlur={onBlur}
      onFocus={onFocus}
      style={{ zIndex: zIndex }}
      className={classes['search-input']}
    />
  )
}

export default SearchInput
