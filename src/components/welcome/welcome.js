import React, { useEffect, useState } from 'react';

const Welcome = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <div className="welcome">
      {showText && (
        <h1 className="banner-text">
          <span className="fade-in">Bienvenidos</span>
        </h1>
      )}
    </div>
  );
};

export default Welcome;