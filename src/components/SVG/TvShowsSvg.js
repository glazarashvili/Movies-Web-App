import React from 'react'

const TvShowsSvg = ({ fill }) => {
  return (
    <svg
      width='30'
      height='24'
      viewBox='0 0 30 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M19.9547 12L12 6.54541V17.4545L19.9547 12Z' fill={fill}></path>
      <rect
        x='0.75'
        y='0.75'
        width='28.5'
        height='22.5'
        rx='3.25'
        stroke={fill}></rect>
    </svg>
  )
}

export default TvShowsSvg
