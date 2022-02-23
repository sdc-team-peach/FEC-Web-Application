import React, { useState, useContext } from 'react';
import AppContext from '../../../AppContext';
import {
  Container, DarkBG, ContentWrapper, Content, LeftArrow, RightArrow,
} from './ReviewPhotoModal.styles';

// eslint-disable-next-line react/prop-types
function ReviewPhotoModal() {
  const { setPhotoModal, reviewPhotos } = useContext(AppContext);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(reviewPhotos.length);

  const [touchPosition, setTouchPosition] = useState(null);

  const next = () => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <>
      <Container>
        {
                    currentIndex > 0
                    && (
                    <LeftArrow onClick={prev} className="left-arrow">
                      &lt;
                    </LeftArrow>
                    )
                }
        <ContentWrapper>
          <Content
            style={{ transform: `translateX(-${currentIndex * (100 / length)}%)`, width: `${100 * length}%` }}
          >
            {reviewPhotos.map((item) => (
              <img
                src={item.url}
                alt="placeholder"
                style={{ width: '50%', height: '100%' }}
              />
            ))}
          </Content>
        </ContentWrapper>
        {
                    currentIndex < (length - 1)
                    && (
                    <RightArrow onClick={next} className="right-arrow">
                      &gt;
                    </RightArrow>
                    )
                }
      </Container>
      <DarkBG onClick={() => { setPhotoModal(false); }} />
    </>
  );
}

export default ReviewPhotoModal;
