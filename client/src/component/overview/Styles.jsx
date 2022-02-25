import React, { useContext, useState } from 'react';
import { ThumbnailImage, Text } from './Thumbnail.Styles';
import AppContext from '../AppContext';


export default function Styles({ style, key, styles }) {
  const myContext = useContext(AppContext);
  const [activeIndex, setActiveIndex] = useState(myContext.productStyle);
  // console.log(style);

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
