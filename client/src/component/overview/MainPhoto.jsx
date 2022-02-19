import React, { useState, useEffect } from 'react';
import StyleFetcher from './styleFetcher';
import Carousel, { CarouselItem } from './Carousel';

function MainPhoto() {
  const { styles, loading } = StyleFetcher();
  const [currentStyle, setCurrentStyle] = useState(null);
  console.log(currentStyle);
  useEffect(() => {
    setCurrentStyle(styles[0]);
  }, [styles]);
  return (
    <Carousel>
      {currentStyle && currentStyle.photos.map((photo) => <CarouselItem key={photo.thumbnail_url} photo={photo.thumbnail_url}>{photo.thumbnail_url}</CarouselItem>) }
    </Carousel>
  );
}

export default MainPhoto;
