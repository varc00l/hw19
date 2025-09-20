import { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Button from './components/Button';
import Modal from './components/Modal';
import { fetchImages } from './components/pixabay';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!searchTerm) return;

    const loadImages = async () => {
      setLoading(true);
      try {
        const newImages = await fetchImages(searchTerm, page);
        setImages((prevImages) => [...prevImages, ...newImages]);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [searchTerm, page]);

  const handleSearchSubmit = (term) => {
    setSearchTerm(term);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearchSubmit} />
      {loading && <Loader />}
      <ImageGallery images={images} onImageClick={openModal} />
      {images.length > 0 && !loading && <Button onClick={handleLoadMore} />}
      {modalImage && <Modal image={modalImage} onClose={closeModal} />}
    </div>
  );
}

export default App;