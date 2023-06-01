import React, { useState, useEffect } from 'react';
import DownloadButton from '../Buttons/menu';

function Dbanner() {
  const images = [
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
    <div>
    <div className="container">
      <div className="img">
        <img src={images[currentImage]} alt="food" />
      </div>
      <div className="img">
        <img src={images[currentImage]} alt="food" />
      </div>
      <div className="img">
        <img src={images[currentImage]} alt="food" />
      </div>
      <div className="img">
        <img src={images[currentImage]} alt="food" />
      </div>
      <div className="img">
        <img src={images[currentImage]} alt="food" />
      </div>
      <div className="img">
        <img src={images[currentImage]} alt="food" />
      </div>
    </div>
      <div className="button-container">
          <DownloadButton buttonText={'Menu'} />
      </div>
      </div>
  );
}

export default Dbanner;
