import React, { useContext, useState, useEffect } from 'react';
import { ThumbnailImage, Text } from './Thumbnail.Styles';
import AppContext from '../AppContext';


export default function Styles({ style, key, styles }) {
  const myContext = useContext(AppContext);
  const [activeIndex, setActiveIndex] = useState(myContext.productStyle);
<<<<<<< HEAD
=======
  // console.log(style);
>>>>>>> 20e2845c7ba2b2683e0420aac4bc6289649d6eb9
  const clearClass = () => {
    const element = document.getElementsByClassName('activeTwo');
    element.classList.remove('activeTwo');
  };

  useEffect(() => {
    // clearClass();
    setActiveIndex(myContext.productStyle);
  }, [myContext.productStyle]);
  return (
    <div>

        <ThumbnailImage
          src={style.photos[0].thumbnail_url}
          className={`${style === activeIndex ? 'activeTwo' : ''}`}
          onClick={ function () { myContext.setGlobalProductStyle(style); setActiveIndex(style)}}
        />
      <Text>
        {style.name}
      </Text>

    </div>
  );
}
