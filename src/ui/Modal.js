import React from 'react'

import classes from './Modal.module.css'

const Modal = ({ children }) => {
  return <div className={classes['modal-container']}>{children}</div>
}

export default Modal
