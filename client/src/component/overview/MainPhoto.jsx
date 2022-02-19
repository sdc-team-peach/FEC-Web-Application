import React, { useState, useEffect } from 'react';
import StyleFetcher from './styleFetcher';
import Carousel, { CarouselItem } from './Carousel';
import CarouselRender from './CarouselRender';

function MainPhoto() {
  const { styles, loading } = StyleFetcher();
  const [currentStyle, setCurrentStyle] = useState(null);
  useEffect(() => {
    setCurrentStyle(styles[0]);
  }, [styles]);
  return (
    // <Carousel>
    //   {currentStyle && currentStyle.photos.map((photo) => <CarouselItem key={photo.thumbnail_url}>{photo.thumbnail_url}</CarouselItem>) }
    // </Carousel>
    <Carousel>
      {currentStyle && currentStyle.photos.map((photo) => <CarouselRender key={photo.thumbnail_url} photo={photo.thumbnail_url} />) }
    </Carousel>
  );
}

export default MainPhoto;
