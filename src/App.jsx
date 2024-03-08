import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import { fetchImages } from './image-api'

import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import ImageModal from './components/ImageModal/ImageModal'

export default function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});
  

  useEffect(() => {
    if (query === "") {
      return;
      }

    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchImages(query, page);
        setImages(prevImages => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [page, query]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  }
  
  const handleLoadMore = () => {
    setPage(page + 1);
  }

  const openModal = (value) => {
    setIsModal(true)
    setSelectedImage(value)
  }

  const closeModal = () => {
    setIsModal(false)
  }

  return (
    <div className='container'>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery items={images} isOpen={openModal} />}
      {images.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      {isLoading && <Loader />}
      {isModal && <ImageModal isOpen={isModal} onClose={closeModal} content={selectedImage} />}
      </div>
    
    
  )
}

