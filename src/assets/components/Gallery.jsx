import { useState } from 'react';
import '@/assets/styles/Gallery.scss';
import leftArrow from '@/assets/Images/arrow_back_ios-24px 1.png';
import rightArrow from '@/assets/Images/arrow_forward_ios-24px 1.png';

function Gallery({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  // Affiche l'image précendente
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Affiche l'image suivante
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="gallery">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slide"
      />

      {images.length > 1 && (
        <>
          <img src={leftArrow} alt="Flèche gauche" className="arrow left" onClick={prevImage}/>
          <img src={rightArrow} alt="Flèche droite" className="arrow right" onClick={nextImage}/>
          <div className="counter">{currentIndex + 1} / {images.length}</div>
        </>
      )}
    </div>
  );
}

export default Gallery;
