import React, { useContext } from 'react';
import { ThumbnailImage, Text } from './Thumbnail.Styles';
import AppContext from '../AppContext';


export default function Styles({ style, key, styles }) {
  const myContext = useContext(AppContext);
  // console.log(style, key, styles)

  return (
    <div>

        <ThumbnailImage
          src={style.photos[0].thumbnail_url}
          onClick={ function () { myContext.setGlobalProductStyle(style);}}
        />
      <Text>
        {style.name}
      </Text>

    </div>
  );
}
