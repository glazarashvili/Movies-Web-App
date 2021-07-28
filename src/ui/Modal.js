import React, { useState } from 'react'
import { Modal as Dialog, Button } from 'antd'

const Modal = ({ videoLink }) => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button
        type='secondary'
        color='secondary'
        onClick={() => setVisible(true)}>
        Watch Trailer
      </Button>
      <Dialog
        title='Watch Trailer'
        centered
        footer={null}
        title={null}
        visible={visible}
        onOk={null}
        onCancel={() => setVisible(false)}
        width={window.innerWidth * 0.6}>
        <div>
          {videoLink
            .map(elem => {
              return (
                <iframe
                  type='text/html'
                  width='100%'
                  height='500px'
                  src={`https://www.youtube.com/embed/${elem.key}`}
                  title={elem.name}
                  key={elem.key}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
              )
            })
            .slice(0, 1)}
        </div>
      </Dialog>
    </>
  )
}

export default Modal
