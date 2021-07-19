import React, { useEffect, useRef } from 'react'

import classes from './SearchPopup.module.css'

const SearchPopup = ({ className, popupShown }) => {
  const overlayRef = useRef(null)

  useEffect(() => {
    // console.log(overlayRef.current, 'current')
  }, [])

  const popupWidth = window.innerWidth / 2

  return (
    <React.Fragment>
      <div
        className={`${classes['search-popup']} ${classes['fade-animation']}`}>
        <img
          src='https://bmscontent1.adjarabet.com/9062/Untitled-13.jpg'
          alt='adv-poster'
          style={{ width: popupWidth, border: '5px' }}
        />
      </div>
      <div
        onClick={popupShown}
        className={`${className} ${classes['fade-animation']}`}
        ref={overlayRef}></div>
    </React.Fragment>
  )
}

export default SearchPopup
