import { useEffect, useState } from "react";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import fetchPhotosByQuery from "./imagesApi";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(false);

  const handleSearch = async (query) => {
    if (!query.trim()) {
      toast.error("Please, fill in the search field");
      return;
    }
    setImages([]);
    setIsLoading(true);
    setError("");
    setQuery(newQuery);
    setPage(1);
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <LoadMoreBtn />
      <ImageGallery />
      <Loader />
      <ErrorMessage />
      <ImageModal />
    </div>
  );
}

export default App;
