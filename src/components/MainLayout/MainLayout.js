import React from 'react'

import classes from './MainLayout.module.css'

import posters from './index'

const MainLayout = () => {
  const [posterIndex, setPosterIndex] = React.useState(0)

  let intViewportHeight = window.innerHeight

  const nextButtonClicked = () => {
    if (posterIndex > posters.length - 2) {
      setPosterIndex(0)
    } else if (posterIndex >= 0 && posterIndex < posters.length) {
      setPosterIndex(prevState => prevState + 1)
    }
  }

  const prevButtonClicked = () => {
    if (posterIndex < 1) {
      setPosterIndex(posters.length - 1)
    } else if (posterIndex >= 0 && posterIndex < posters.length) {
      setPosterIndex(prevState => prevState - 1)
    }
  }

  console.log(posterIndex)

  return (
    <div
      className={classes['main-layout']}
      style={{ height: intViewportHeight / 2 }}>
      <img
        style={{
          backgroundSize: 'hover',
          height: '100%',
          objectFit: 'cover',
          width: '100%',
        }}
        src={posters[posterIndex].url}
      />
      <div
        style={{
          backgroundSize: 'hover',
          height: '100%',
          objectFit: 'cover',
          width: '100%',
          backgroundImage: posters[posterIndex].url,
        }}></div>
      <svg
        className={classes.arrowBack}
        onClick={prevButtonClicked}
        width='34'
        height='172'
        viewBox='0 0 34 172'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M32.9091 1L2 86L32.9091 171'
          stroke='#999999'
          stroke-width='2'></path>
      </svg>
      <svg
        className={classes.arrowForward}
        onClick={nextButtonClicked}
        width='34'
        height='172'
        viewBox='0 0 34 172'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1.09091 171L32 86L1.09092 1'
          stroke='#999999'
          stroke-width='2'></path>
      </svg>
    </div>
  )
}

export default MainLayout
