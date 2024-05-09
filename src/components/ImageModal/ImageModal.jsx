import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ImageModal = ({ isOpen, onRequestClose, imageData }) => {
  if (!imageData) {
    return null;
  }
  const { urls, description } = imageData;
  return (
    <Modal
      className={s.modal}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      overlayClassName={s.overlay}
    >
      <button className={s.btn} onClick={onRequestClose}>
        <IoIosCloseCircleOutline className={s.icon} />
      </button>
      <img src={urls.regular} alt={description} className={s.image} />
    </Modal>
  );
};

export default ImageModal;
