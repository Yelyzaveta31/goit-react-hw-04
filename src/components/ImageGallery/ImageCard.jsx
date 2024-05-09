import s from "./ImageCard.module.css";

const ImageCard = ({ item, onImageClick }) => {
  const {
    description: description,
    urls: { small },
  } = item;
  return (
    <div onClick={onImageClick}>
      <img className={s.image} src={small} alt={description} />
    </div>
  );
};

export default ImageCard;
