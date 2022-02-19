import React from 'react';
import { Picture, ThumbnailImage, Text } from './Thumbnail.Styles';

export default function Styles({ style }) {
  // console.log(style);
  return (
    <div>

        <ThumbnailImage
          src={style.photos[0].thumbnail_url}
        />
        <Text>
          {style.name}
        </Text>

    </div>
  );
}
