import React from 'react';

const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <li className="gallery-item">
      <img
        src={image.webformatURL}
        alt={image.tags}
        className="gallery-image"
        onClick={() => onImageClick(image.largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;