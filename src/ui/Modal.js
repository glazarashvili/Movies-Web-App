import React, { useState } from 'react'
import { Modal as Dialog, Button } from 'antd'

const Modal = ({ children, modalFooter, modalTitle, modalWidth }) => {
  const [visible, setVisible] = useState(false)
  return (
    <React.Fragment>
      <Button
        type='secondary'
        color='secondary'
        onClick={() => setVisible(true)}>
        Watch Trailer
      </Button>
      <Dialog
        title='Watch Trailer'
        centered
        footer={modalFooter}
        title={modalTitle}
        visible={visible}
        onCancel={() => setVisible(false)}
        width={modalWidth}>
        <div>{children}</div>
      </Dialog>
    </React.Fragment>
  )
}

export default Modal
