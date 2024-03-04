import { useState } from 'react'
import './App.css'

import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import { fetchImages } from './image-api'

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  
  const handleSearch = async (newQuery) => {
    try {
      setIsLoading(true);
      setError(false);
      setImages([]);
      const data = await fetchImages(newQuery);
      setImages(data);
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <b>Loading...</b>}
      {error && <b>Oops! Error! Reload!</b>}
      {images.length > 0 && <ImageGallery items={images} />}
    </div>
    
    
  )
}










// useEffect(() => {
  //   async function getImages() {
  //     const data = await fetchImages();
  //     setImages(data);
  //   }
    
  //   getImages();
  // }, []);



