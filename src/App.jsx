import { useEffect, useState } from "react";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import toast from "react-hot-toast";
import fetchPhotosByQuery from "./imagesApi";
import Modal from "react-modal";

function App() {
  Modal.setAppElement("#root");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleSearch = async (newQuery) => {
    if (!newQuery.trim()) {
      toast.error("Please, fill in the search field");
      return;
    }
    setImages([]);
    setIsLoading(true);
    setError("");
    setQuery(newQuery);
    setPage(1);
  };

  const handleImageClick = (imageData) => {
    setModalOpen(true);
    setModalData(imageData);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    async function getImage() {
      if (!query) return;
      setIsLoading(true);
      setError("");

      try {
        const data = await fetchPhotosByQuery(query, page);
        if (data.results.length === 0) {
          toast.error("There are no image for your query ");
        }
        setImages((prev) => [...prev, ...data.results]);
      } catch (error) {
        setError(error.message);
        toast.error("Error loading");
      } finally {
        setIsLoading(false);
      }
    }
    getImage();
  }, [query, page]);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage error="Error loading data" />}
      {images.length > 0 && (
        <ImageGallery items={images} openModal={handleImageClick} />
      )}
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      <ImageModal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        imageData={modalData}
      />
    </div>
  );
}

export default App;
