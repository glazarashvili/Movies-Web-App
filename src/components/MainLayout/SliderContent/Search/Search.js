import React from 'react'

import SearchPopup from './SearchPopup'
import SearchInput from './SearchInput'
import SearchIcon from '../../../SVG/SearchIcon'

import classes from './Search.module.css'

const Search = () => {
  const [popupShown, setPopupShown] = React.useState(false)

  return (
    <div className={classes['search-bar']}>
      <SearchInput
        zIndex={popupShown ? 2000 : 0}
        onFocus={() => setPopupShown(true)}
      />
      <SearchIcon
        zIndex={popupShown ? 2000 : 0}
        onSearchIconClick={() => setPopupShown(true)}
      />
      {popupShown && (
        <SearchPopup
          className={classes.backdrop}
          popupShown={() => setPopupShown(false)}
        />
      )}
    </div>
  )
}

export default Search
