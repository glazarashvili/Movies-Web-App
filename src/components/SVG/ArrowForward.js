import React from 'react'

const ArrowForward = ({ className, buttonClickHandler }) => {
  return (
    <svg
      className={className}
      onClick={buttonClickHandler}
      width='34'
      height='120'
      viewBox='0 0 34 172'
      fill='none'
      strokeWidth='4'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M1.09091 171L32 86L1.09092 1' stroke='#999999'></path>
    </svg>
  )
}

export default ArrowForward
