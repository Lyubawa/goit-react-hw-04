import Modal from 'react-modal'
import css from './ImageModal.module.css'

Modal.setAppElement("#root");
export default function ImageModal({ isModal, onClose, content }) {
  
  
    return (
              <Modal
          isOpen={isModal}
          onRequestClose={onClose}
        className={css.modal}
        overlayClassName={css.overlay}
          contentLabel="Modal window"
        >
       {isModal && (
    <div> 
      <img className={css.img} src={content.urls.regular} alt={content.alt_description} />
      </div>
       )}
       </Modal>
    )
  }
