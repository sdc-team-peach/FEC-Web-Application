import React, { useEffect, useContext } from 'react';
import AppContext from '../../AppContext';
import { ThumbnailContainer, Thumbnail } from './ReviewPhotos.styles';

function Thumbnails({ photos }) {
  const { setReviewPhotos, setPhotoModal, reviewPhotos } = useContext(AppContext);

  function photoClick() {
    setReviewPhotos(photos);
    console.log(reviewPhotos);
    setPhotoModal(true);
  }

  return (
    <ThumbnailContainer>
      {photos.map((item) => (
        <Thumbnail>
          {' '}
          <img
            src={item.url}
            alt="placeholder"
            style={{ width: '100%', height: '100%' }}
            onClick={() => { photoClick(); }}
          />
          {' '}
        </Thumbnail>
      ))}
    </ThumbnailContainer>
  );
}

export default Thumbnails;
