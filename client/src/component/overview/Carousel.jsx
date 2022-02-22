import React, { useState, useEffect } from 'react';
import { Button } from '../../GlobalStyle';

export function CarouselItem ({ children, width }) {
  return (
    <div className="carousel-item" style={{ width }}>
      {children}
    </div>
  );
}

function Carousel({ children, photo }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 1500);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)`}}>
        {React.Children.map(children, (child, index) => <img src={child.key} style={{width: '100%'}} />) }
      </div>
      <div className="indicators">
        <Button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </Button>
        {React.Children.map(children, (child, index) => (
          <Button
            className={`${index === activeIndex ? 'active' : ''}`}
            onClick={() => {
              updateIndex(index);
            }}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Carousel;
