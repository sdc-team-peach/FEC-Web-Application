import React, { useState } from 'react';
import GlobalStyles from '../../GlobalStyle';

export const CarouselItem = ({ children, width, photo }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
      <img src={photo}/>;
    </div>
  );
};

const Carousel = ({ children, photo }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  }

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)`}}>
        {React.Children.map(children, (child, index) => {
          return <img src={photo}/>;
        })}
      </div>
      <div className="indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
