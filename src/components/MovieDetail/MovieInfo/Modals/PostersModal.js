import Modal from '../../../../ui/Modal'

const TrailerModal = ({}) => {
  return (
    <Modal
      title='Show Posters'
      modalFooter={null}
      modalTitle={null}
      modalWidth={window.innerWidth * 0.6}>
      <div style={{ marginTop: '20px' }}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </Modal>
  )
}

export default TrailerModal
