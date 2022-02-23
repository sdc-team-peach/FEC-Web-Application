import React, { useState, useEffect, useContext } from 'react';
import StyleFetcher from './styleFetcher';
import Carousel, { CarouselItem } from './Carousel';
import CarouselRender from './CarouselRender';
import AppContext from '../AppContext';

function MainPhoto() {
  const myContext = useContext(AppContext);
  const { styles, loading } = StyleFetcher();
  const [currentStyle, setCurrentStyle] = useState(null);
  useEffect(() => {
    setCurrentStyle(styles[0]);
  }, [styles]);

  useEffect(() => {
    setCurrentStyle(myContext.productStyle);
  }, [myContext.productStyle]);

  return (
    <Carousel>
      {currentStyle && currentStyle.photos.map((photo) => <CarouselRender key={photo.thumbnail_url} photo={photo.thumbnail_url} />) }
    </Carousel>
  );
}

export default MainPhoto;
