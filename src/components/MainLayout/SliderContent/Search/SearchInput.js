import React from 'react'

import classes from './SearchInput.module.css'

const SearchInput = ({ onFocus, zIndex }) => {
  return (
    <input
      placeholder='Search...'
      type='search'
      onFocus={onFocus}
      style={{ zIndex: zIndex }}
      className={classes['search-input']}
    />
  )
}

export default SearchInput
