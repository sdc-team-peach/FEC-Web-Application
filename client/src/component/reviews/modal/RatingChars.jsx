import React, { useState, useContext } from 'react';
import axios from 'axios';
import {
  Container, Title, ModalWrapper, Form, Button, RatingContainer, StarContainer, SubTitle,
} from './Modal.styles';
import StarRatings from '../../ratings/Ratings';
import CharRating from './charRating/CharRating';
import AppContext from '../../AppContext';

// eslint-disable-next-line react/prop-types
function Characteristics({ input, setInput }) {
  const { productId, metaCharacteristics } = useContext(AppContext);

  function addRating(num) {
    setInput({ ...input, rate: num });
  }

  function addCharRating(char, num) {
    if (metaCharacteristics) {
      const newRate = {};
      newRate[metaCharacteristics[char].id] = num;
      setInput({ ...input, characteristics: { ...input.characteristics, ...newRate } });
    }
  }

  return (
    <ModalWrapper>
      <Container>
        <Title>Rate our product!</Title>
        <p>click the star to rate our product!</p>
        <StarContainer>
          <StarRatings isRating addRating={(num) => { addRating(num); }} />
        </StarContainer>
        <RatingContainer>
          <CharRating
            addCharRating={(num) => {
              addCharRating('Fit', num);
            }}
            value="Fit"
          />
        </RatingContainer>
        <RatingContainer>
          <CharRating
            addCharRating={(num) => {
              addCharRating('Length', num);
            }}
            value="Length"
          />
        </RatingContainer>
        <RatingContainer>
          <CharRating
            addCharRating={(num) => {
              addCharRating('Comfort', num);
            }}
            value="Comfort"
          />
        </RatingContainer>
        <RatingContainer>
          <CharRating
            addCharRating={(num) => {
              addCharRating('Quality', num);
            }}
            value="Quality"
          />
        </RatingContainer>
      </Container>
    </ModalWrapper>
  );
}

export default Characteristics;
