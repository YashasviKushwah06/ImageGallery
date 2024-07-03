import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './App.css';

const images = [
  '/images/about.jpg',
  '/images/antelopeCanyon.jpg',
  '/images/barcelonaSpain.jpg',
  '/images/cappadociaTurkey.jpg',
  '/images/contact.jpg',
  '/images/hawaii.jpg',
  '/images/kyotoJapan.jpg',
  '/images/laplandFinland.jpg',
  '/images/oiaGreece.jpg',
  '/images/parisFrance.jpg',
  '/images/petraJordan.jpg',
  '/images/services.jpg',
  '/images/Seychelles.jpg'
];

const App = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const moveNext = () => {
    setSelectedImageIndex((selectedImageIndex + 1) % images.length);
  };

  const movePrev = () => {
    setSelectedImageIndex((selectedImageIndex + images.length - 1) % images.length);
  };

  return (
    <div className="App">
    <h1>Image Gallery</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img
              src={image}
              alt={`Image ${index}`}
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          mainSrc={images[selectedImageIndex]}
          nextSrc={images[(selectedImageIndex + 1) % images.length]}
          prevSrc={images[(selectedImageIndex + images.length - 1) % images.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={movePrev}
          onMoveNextRequest={moveNext}
        />
      )}
    </div>
  );
};

export default App;
