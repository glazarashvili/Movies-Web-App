import React from 'react'

import classes from './MovieCard.module.css'

import Button from '../../../UI/Button'
import Backdrop from '../../../UI/Backdrop'
import Template from '../../../UI/Template'
import VideoModal from './Modals/VideoModal'

const MovieCard = ({ backdrop, movieTitle, trailers }) => {
  const [modal, showModal] = React.useState(false)
  const closeModal = () => showModal(false)

  const background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${backdrop}) no-repeat center center/cover`

  return (
    <div className={classes['movie-card']} style={{ background: background }}>
      <Template className={classes['movie-content']}>
        <h1 className={classes['movie-title']}>{movieTitle}</h1>
        <div className={classes['movie-ranking']}>
          <Button
            disabled={trailers.length ? false : true}
            title='watch trailer'
            onBtnClick={() => showModal(true)}
          />
          {modal && <VideoModal cancelClick={closeModal} trailers={trailers} />}
          {modal && <Backdrop backdropClick={closeModal} />}
        </div>
      </Template>
    </div>
  )
}

export default MovieCard
