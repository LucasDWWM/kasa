import { useState } from 'react';
import '@/assets/styles/Gallery.scss';

// Composant Gallery : affiche un carrousel d'images
function Gallery({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0); // Index de l'image actuellement affichée

  // Si aucune image, on ne rend rien
  if (!images || images.length === 0) {
    return null;
  }

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
      {/* Image courante */}
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

      {/* Contrôles visibles seulement s'il y a plusieurs images */}
      {images.length > 1 && (
        <>
          <button onClick={prevImage}>←</button>
          <button onClick={nextImage}>→</button>
          <span className="counter">
            {currentIndex + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
}

export default Gallery;
