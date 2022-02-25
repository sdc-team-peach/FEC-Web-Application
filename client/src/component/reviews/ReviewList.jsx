/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import StarRatings from '../ratings/Ratings';
import Thumbnails from './reviewPhotos/Thumbnails';
import {
  Content, ReviewContainer, Title, Subtext, Thumb,
} from './Review.styles';

// eslint-disable-next-line react/prop-types
function ReviewList({ review }) {
  const [helpful, setHelpful] = useState(false);
  const [count, setCount] = useState(review.helpfulness);
  function handleThumbClick() {
    axios.put(`/reviews/${review.review_id}`)
      .then(() => {
        console.log('helpful works!');
        setHelpful((initial) => !initial);
        setCount((initial) => initial + 1);
      });
  }
  return (
    <ReviewContainer>
      <StarRatings currentRating={review.rating} />
      <Content>
        <Title>
          <Subtext>
            {' '}
            { review.date }
          </Subtext>
          {review.summary}
        </Title>
        {review.body}
        <Subtext>
          {' '}
          <Thumb
            color={helpful ? '#cde306' : '#000'}
            onClick={() => { handleThumbClick(); }}
          />
          {' '}
          this review was helpful (
          {count.toString()}
          ) &nbsp;
        </Subtext>
      </Content>
      <Thumbnails photos={review.photos} />
    </ReviewContainer>
  );
}

export default ReviewList;
