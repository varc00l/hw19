import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className="image-gallery">
      {images.map(image => (
        <ImageGalleryItem 
          key={image.id} 
          image={image} 
          onImageClick={onImageClick} 
        />
      ))}
    </ul>
  );
};

export default ImageGallery;