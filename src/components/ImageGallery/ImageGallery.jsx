import ImageCard from "./ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ items, openModal }) => {
  return (
    <ul className={s.gallery}>
      {items.map((item) => {
        return (
          <li className={s.card} key={item.id} onClick={() => openModal(item)}>
            <ImageCard item={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
