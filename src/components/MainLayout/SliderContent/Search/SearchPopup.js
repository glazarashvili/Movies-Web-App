import React, { useEffect, useRef } from 'react'
import { useDelayUnmount } from '../../../../hooks/useDelayUnmount'
import classes from './SearchPopup.module.css'

const SearchPopup = ({ className, popupShown }) => {
  const overlayRef = useRef(null)

  // useEffect(() => {
  //   console.log(overlayRef.current)

  //   return () => {
  //     console.log(overlayRef, 'return')
  //   }
  // }, [])

  const [isMounted, setIsMounted] = React.useState(true)
  const shouldRenderChild = useDelayUnmount(isMounted, 500)

  const mountedStyle = { opacity: 1, transition: 'opacity 500ms ease-in' }
  const unmountedStyle = { opacity: 0, transition: 'opacity 500ms ease-in' }

  const popupWidth = window.innerWidth / 2

  return (
    shouldRenderChild && (
      <React.Fragment>
        <div
          className={`${classes['search-popup']} ${
            isMounted ? classes['fade-animation'] : classes['hide-animation']
          }`}>
          <img
            src='https://bmscontent1.adjarabet.com/9062/Untitled-13.jpg'
            alt='adv-poster'
            style={{ width: popupWidth, border: '5px' }}
          />
        </div>
        <div
          // style={isMounted ? mountedStyle : unmountedStyle}
          onClick={() => {
            setIsMounted(!isMounted)
            popupShown()
          }}
          className={`${className} ${
            isMounted ? classes['fade-animation'] : classes['hide-animation']
          }`}
          className={`${className}`}
          ref={overlayRef}></div>
      </React.Fragment>
    )
  )
}

export default SearchPopup
