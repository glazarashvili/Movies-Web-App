import Modal from '../../../../ui/Modal'

const TrailerModal = ({ trailers }) => {
  return (
    <Modal
      title='Watch Trailer'
      modalFooter={null}
      modalTitle={null}
      modalWidth={window.innerWidth * 0.6}>
      <div>
        {trailers
          .map(elem => {
            return (
              <iframe
                width='100%'
                height='500px'
                key={elem.key}
                type='text/html'
                title={elem.name}
                style={{ padding: '15px' }}
                src={`https://www.youtube.com/embed/${elem.key}`}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
            )
          })
          .slice(0, 1)}
      </div>
    </Modal>
  )
}

export default TrailerModal
