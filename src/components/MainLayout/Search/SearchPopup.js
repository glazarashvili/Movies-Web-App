import React from 'react'

import classes from './SearchPopup.module.css'

const SearchPopup = ({ className, popupShown }) => {
  return (
    <React.Fragment>
      <div className={classes['search-popup']}>
        <img
          src='https://bmscontent1.adjarabet.com/9062/Untitled-13.jpg'
          alt='adv-poster'
        />
      </div>
      <div onClick={popupShown} className={className}></div>
    </React.Fragment>
  )
}

export default SearchPopup
