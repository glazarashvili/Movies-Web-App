import React from 'react'
import Template from '../../../../ui/Template'

import classes from './SearchInput.module.css'

const SearchInput = ({ onFocus, zIndex, movieValue, onChange }) => {
  return (
    // <Template>
    <input
      type='search'
      onFocus={onFocus}
      value={movieValue}
      onChange={onChange}
      placeholder='Search...'
      style={{ zIndex: zIndex }}
      className={classes['search-input']}
    />
    // </Template>
  )
}

export default SearchInput
