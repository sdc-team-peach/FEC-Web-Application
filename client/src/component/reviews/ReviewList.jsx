/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import { MdThumbUpOffAlt } from 'react-icons/md';
import StarRatings from '../ratings/Ratings';
import Thumbnails from './reviewPhotos/Thumbnails';
import {
  Content, ReviewContainer, Title, Subtext, Thumb,
} from './Review.styles';

// eslint-disable-next-line react/prop-types
function ReviewList({ review }) {
  const [helpful, setHelpful] = useState(false);
  function handleThumbClick() {
    axios.put(`/reviews/${review.review_id}`)
      .then(() => {
        console.log('helpful works!');
        setHelpful((initial) => !initial);
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
            color={helpful ? '#00A36C' : '#000'}
            onClick={() => { handleThumbClick(); }}
          />
          {' '}
          this review was helpful (
          {review.helpfulness.toString()}
          )
        </Subtext>
      </Content>
      <Thumbnails photos={review.photos} />
    </ReviewContainer>
  );
}

export default ReviewList;
