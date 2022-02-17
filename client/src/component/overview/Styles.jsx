import React from 'react';

export default function Styles({ style }) {
  // console.log(style);
  return (
    <div>
      styles
      {style.name}
      <img
        src={style.photos[0].thumbnail_url}
        alt="new"
      />
    </div>
  );
}
