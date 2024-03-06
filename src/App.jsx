import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import { fetchImages } from './image-api'
import { Toaster } from 'react-hot-toast';

export default function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  

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

  return (
    <div className='container'>
      <SearchBar onSubmit={handleSearch} />
      
      {error && <b>Oops! Error! Reload!</b>}
      {images.length > 0 && <ImageGallery items={images} />}
      {images.length > 0 && !isLoading && <button onClick={handleLoadMore}>Load more</button>}
      {isLoading && <b>Loading...</b>}
      <Toaster />
      </div>
    
    
  )
}

