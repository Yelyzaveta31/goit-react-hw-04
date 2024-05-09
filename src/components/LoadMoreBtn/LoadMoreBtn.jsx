import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <div>
      <button onClick={handleLoadMore} className={s.loadBtn}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
