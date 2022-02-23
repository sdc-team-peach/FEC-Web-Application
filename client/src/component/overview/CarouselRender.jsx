import React, { useState, useEffect } from 'react';
import Carousel, { CarouselItem } from './Carousel';

function CarouselRender( {photo} ) {
  console.log(photo);
  return (
    <CarouselItem>
      {photo}
    </CarouselItem>
  );
}

export default CarouselRender;
