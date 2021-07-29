import React from 'react'

import classes from './Template.module.css'

const Template = ({ children, className }) => {
  return (
    <div className={`${classes['template-container']} ${className}`}>
      {children}
    </div>
  )
}

export default Template
