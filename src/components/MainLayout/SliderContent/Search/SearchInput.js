import React from 'react'

import classes from './SearchInput.module.css'

const SearchInput = ({ onFocus, zIndex }) => {
  return (
    <input
      type='search'
      onFocus={onFocus}
      placeholder='Search...'
      style={{ zIndex: zIndex }}
      className={classes['search-input']}
    />
  )
}

export default SearchInput
