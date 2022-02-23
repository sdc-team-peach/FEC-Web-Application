import React, { useState, useContext } from 'react';
import axios from 'axios';
import AddReview from './AddReview';
import Carousel from './carousel/Carousel';
import AppContext from '../../AppContext';
import Characteristics from './RatingChars';

// eslint-disable-next-line react/prop-types
function ReviewModal() {
  const {
    productId, modalReviewClicked, setModalReviewClicked, metaCharacteristics,
  } = useContext(AppContext);

  const [input, setInput] = useState({
    product_id: productId, name: '', body: '', summary: '', email: '', rating: 1, photos: [], recommend: false, characteristics: {},
  });

  return (
    <Carousel toggle={setModalReviewClicked}>
      <Characteristics input={input} setInput={setInput} />
      <AddReview input={input} setInput={setInput} />
    </Carousel>
  );
}

export default ReviewModal;
