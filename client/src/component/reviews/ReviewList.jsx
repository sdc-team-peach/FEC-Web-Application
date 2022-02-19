/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { MdThumbUpOffAlt } from 'react-icons/md';
import StarRatings from '../ratings/Ratings';
import {
  Content, ReviewContainer, Title, Subtext,
} from './Review.styles';

// eslint-disable-next-line react/prop-types
function ReviewList({ review }) {
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
        {review.recommend && (
        <Subtext>
          {' '}
          <MdThumbUpOffAlt />
          {' '}
          this review was helpful(
          {!review.helfulness && 0}
          {review.helfulness && review.helfulness}
          )
        </Subtext>
        )}
      </Content>
    </ReviewContainer>
  );
}

export default ReviewList;
