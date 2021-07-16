import React from 'react'

const CinemaSvg = ({ fill }) => {
  return (
    <svg
      class='svg-icon svg-icon--cinemania'
      width='22'
      height='24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M22 17.946a11.839 11.839 0 0 1-10.155 5.744C5.303 23.69 0 18.387 0 11.845 0 5.303 5.303 0 11.845 0 16.155 0 19.928 2.302 22 5.744l-4.943 3.873V7.633a1 1 0 0 0-1-1H6.686a1 1 0 0 0-1 1v8.424a1 1 0 0 0 1 1h9.37a1 1 0 0 0 1-1v-1.985L22 17.946z'
        fill={fill}></path>
      <path
        fill={fill}
        d='M6.633 7.581h1.895v1.895H6.633zM10.423 7.581h1.895v1.895h-1.895zM14.214 7.581h1.895v1.895h-1.895zM6.633 14.214h1.895v1.895H6.633zM10.423 14.214h1.895v1.895h-1.895zM14.214 14.214h1.895v1.895h-1.895z'></path>
    </svg>
  )
}

export default CinemaSvg
