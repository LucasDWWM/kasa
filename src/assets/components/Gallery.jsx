import { useState } from 'react';
import '@/assets/styles/Gallery.scss';
import leftArrow from '@/assets/Images/arrow_back_ios-24px 1.png';
import rightArrow from '@/assets/Images/arrow_forward_ios-24px 1.png';

function Gallery({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  // Affiche l'image précédente
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
      {/* Flèches de navigation + compteur s'il y a plus d'une image */}
      {images.length > 1 && (
        <>
          {/* Flèche gauche pour revenir en arrière */}
          <img src={leftArrow} alt="Flèche gauche" className="arrow left" onClick={prevImage}/>

          {/* Flèche droite pour avancer */}
          <img src={rightArrow} alt="Flèche droite" className="arrow right" onClick={nextImage}/>

          {/* numéro de l’image affichée / nombre total d’images */}
          <div className="counter">{currentIndex + 1} / {images.length}</div>
        </>
      )}
    </div>
  );
}

export default Gallery;
