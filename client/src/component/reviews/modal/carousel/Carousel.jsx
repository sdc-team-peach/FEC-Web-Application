import React, { useEffect, useState } from 'react';
import {
  Container, Wrapper, ContentWrapper, Content, Next, Prev, ButtonWrapper,
} from './Carousel.styles';

function Carousel({ children, toggle }) {
  console.log(children);
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevState) => prevState + 1);
  };
  console.log(currentIndex);
  const prev = () => {
    setCurrentIndex((prevState) => prevState - 1);
  };

  return (
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
                Submit
              </Prev>
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
  );
}

export default Carousel;
