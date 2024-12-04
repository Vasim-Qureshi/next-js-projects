// components/Carousel.js
"use client"
import { useState, useEffect } from 'react';
import styles from './Carousel.module.css'; // We'll define styles in the next step

export default function Carousel_2({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button onClick={goToPrevious} className={styles.button}>
        &lt;
      </button>
      <div className={styles.imageContainer}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className={styles.image}
        />
      </div>
      <button onClick={goToNext} className={styles.button}>
        &gt;
      </button>
    </div>
  );
};