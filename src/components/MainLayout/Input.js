import React from 'react'

import classes from './Input.module.css'

const Input = ({ onFocus, onBlur }) => {
  return (
    <input
      placeholder='Search...'
      type='search'
      onBlur={onBlur}
      onFocus={onFocus}
      className={`${classes['search-input']}`}
    />
  )
}

export default Input
