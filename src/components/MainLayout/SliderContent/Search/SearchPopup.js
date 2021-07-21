import React from 'react'
import classes from './SearchPopup.module.css'

const SearchPopup = ({ className, popupShown, animationClass }) => {
  const popupWidth = window.innerWidth / 2

  return (
    <React.Fragment>
      <div className={`${classes['search-popup']} ${animationClass}`}>
        <img
          src='https://bmscontent1.adjarabet.com/9062/Untitled-13.jpg'
          alt='adv-poster'
          style={{ width: popupWidth, border: '5px' }}
        />
      </div>
      <div
        onClick={popupShown}
        className={`${className} ${animationClass}`}></div>
    </React.Fragment>
  )
}

export default SearchPopup
