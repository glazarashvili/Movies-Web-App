import React from 'react'

import classes from './Input.module.css'

const Input = () => {
  return (
    <input
      placeholder='Search...'
      type='search'
      className={classes['search-input']}
    />
  )
}

export default Input
