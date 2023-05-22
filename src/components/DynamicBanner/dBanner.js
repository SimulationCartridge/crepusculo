import React, { useState, useEffect } from 'react';

function Dbanner() {
  const images = [
    '../images/Screenshot_1.png',
    '../images/Screenshot_2.png',
    '../images/Screenshot_6.png'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="banner">
      <div className="image-container">
        <img src={images[currentImage]} alt="food" />
      </div>
    </div>
  );
}

export default Dbanner;
