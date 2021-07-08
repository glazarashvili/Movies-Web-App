import React from 'react'

import poster from '../../assets/posters/minpost.jpg'

import classes from './Movie.module.css'

const MovieItem = () => {
  return (
    <div>
      <div className={classes['movie-item']}>
        <img className={classes.poster} src={poster} />
        <div className={classes.background}>
          <svg
            className={classes['player-icon']}
            width='66'
            height='66'
            viewBox='0 0 66 66'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M25.3788 46C25.0229 45.9978 24.6812 45.8676 24.4232 45.636C24.2887 45.5155 24.1817 45.3702 24.109 45.2091C24.0362 45.0479 23.9991 44.8745 24 44.6993V21.3008C23.9994 21.0674 24.0653 20.8382 24.1909 20.6373C24.3166 20.4363 24.4972 20.2712 24.7138 20.1592C24.9304 20.0472 25.175 19.9925 25.4217 20.0008C25.6684 20.0092 25.9082 20.0804 26.1157 20.2068L45.3688 31.906C45.5624 32.0238 45.7217 32.1857 45.8319 32.3768C45.9422 32.5679 46 32.782 46 32.9997C46 33.2174 45.9422 33.4316 45.8319 33.6227C45.7217 33.8138 45.5624 33.9756 45.3688 34.0934L26.1157 45.7927C25.8961 45.9269 25.6403 45.9988 25.3788 46ZM26.7505 23.6816V42.3185L42.0831 32.9994L26.7505 23.6816Z'
              fill='blue'></path>
            <circle
              cx='33'
              cy='33'
              r='31.5'
              stroke='white'
              stroke-width='4'></circle>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default MovieItem
