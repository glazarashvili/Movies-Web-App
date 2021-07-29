import React from 'react'

import Modal from '../../../../ui/Modal'

import classes from './VideoModal.module.css'

const VideoModal = ({ trailers, cancelClick }) => {
  return (
    <Modal>
      {trailers
        .map(elem => {
          return (
            <section>
              <div className={classes['modal-header']}>
                <h1>{elem.name}</h1>
                <button onClick={cancelClick} className={classes['cancel-btn']}>
                  X
                </button>
              </div>
              <iframe
                width='100%'
                height='500px'
                key={elem.key}
                type='text/html'
                title={elem.name}
                src={`https://www.youtube.com/embed/${elem.key}`}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
            </section>
          )
        })
        .slice(0, 1)}
    </Modal>
  )
}

export default VideoModal
