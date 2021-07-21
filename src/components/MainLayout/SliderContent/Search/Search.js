import React from 'react'

import SearchPopup from './SearchPopup'
import SearchInput from './SearchInput'
import SearchIcon from '../../../SVG/SearchIcon'

import classes from './Search.module.css'
import { useDelayUnmount } from '../../../../hooks/useDelayUnmount'

const Search = () => {
  const [isMounted, setIsMounted] = React.useState(false)

  const shouldRenderChild = useDelayUnmount(isMounted, 400)

  return (
    <div className={classes['search-bar']}>
      <SearchInput
        zIndex={isMounted ? 2000 : 0}
        onFocus={() => setIsMounted(true)}
      />
      <SearchIcon
        zIndex={isMounted ? 2000 : 0}
        onSearchIconClick={() => setIsMounted(true)}
      />
      {shouldRenderChild && (
        <SearchPopup
          className={`${classes.backdrop}`}
          animationClass={`${
            isMounted ? classes['fade-animation'] : classes['hide-animation']
          }`}
          popupShown={() => {
            setIsMounted(false)
          }}
        />
      )}
    </div>
  )
}

export default Search
