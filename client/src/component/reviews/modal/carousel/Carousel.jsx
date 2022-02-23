import React, { useEffect, useState, useContext } from 'react';
import {
  Container, Wrapper, ContentWrapper, Content, Next, Prev, ButtonWrapper, DarkBG,
} from './Carousel.styles';
import AppContext from '../../../AppContext';

function Carousel({ children, toggle, post }) {
  const { productId, setModalReviewClicked } = useContext(AppContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevState) => prevState + 1);
  };

  const prev = () => {
    setCurrentIndex((prevState) => prevState - 1);
  };
  function handleBGClick() {
    setModalReviewClicked(false);
  }
  return (
    <>
      <Container>
        <Wrapper>
          <ContentWrapper>
            <Content
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
              {React.Children.map(children, (child, index) => (
                React.cloneElement(child, { key: currentIndex, width: '100%' })
              ))}
            </Content>
            <ButtonWrapper>
              {
            currentIndex === 1
            && (
            // eslint-disable-next-line react/button-has-type
            <>
              <Prev onClick={prev}>
                Back
              </Prev>
              <Prev onClick={() => { toggle(false); }}>
                Dismiss
              </Prev>
              {/* <Prev type="submit" onClick={() => { post(); }}>
                Submit
              </Prev> */}
            </>
            )
        }
              {
            currentIndex === 0
            && (
            // eslint-disable-next-line react/button-has-type
            <Next onClick={next}>
              Next
            </Next>
            )
        }
            </ButtonWrapper>
          </ContentWrapper>
        </Wrapper>
      </Container>
      <DarkBG onClick={() => { handleBGClick(); }} />
    </>
  );
}

export default Carousel;
