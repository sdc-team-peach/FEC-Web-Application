/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import StarRatings from '../ratings/Ratings';
import {
  Content, Container, Title, Subtext,
} from './Review.styles';

// eslint-disable-next-line react/prop-types
function ReviewList({ review }) {
  return (
    <Container>
      <StarRatings currentRate={review.rating} />
      <Content>
        <Title>
          {review.summary}
        </Title>
        {review.body}
        <Subtext> this review was helpful!</Subtext>
        {review.recommend && <Subtext> this review was helpful!</Subtext>}
      </Content>
    </Container>
  );
}

export default ReviewList;
