import React, { useState, useEffect } from 'react';
import StyleFetcher from './StyleFetcher';

function MainPhoto() {
  const { styles, loading } = StyleFetcher();
  const [currentStyle, setCurrentStyle] = useState(null);
  useEffect(() => {
    setCurrentStyle(styles[0]);
  }, [styles]);
  return (
    <div>
      {currentStyle && <img src={currentStyle.photos[0].url} alt="new" /> }
    </div>
  );
}

export default MainPhoto;
