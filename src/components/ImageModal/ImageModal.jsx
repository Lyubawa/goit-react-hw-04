import Modal from 'react-modal'
import css from './ImageModal.module.css'

Modal.setAppElement("#root");
export default function ImageModal({ isOpen, onClose, content }) {
  const altDescription =
    content && content.alt_description
      ? content.alt_description
      : 'content Description';
  
    return (
              <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
        className={css.modal}
        overlayClassName={css.overlay}
          contentLabel="Modal window"
        >
       {isOpen && (
    <div> 
      <img className={css.img} src={content.urls.regular} alt={altDescription} />
      </div>
       )}
       </Modal>
    )
  }
