import React from 'react'

const ArrowBack = ({ className, buttonClickHandler }) => {
  return (
    <svg
      className={className}
      onClick={buttonClickHandler}
      width='34'
      height='172'
      viewBox='0 0 34 172'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M32.9091 1L2 86L32.9091 171' stroke='#999999'></path>
    </svg>
  )
}

export default ArrowBack
