/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Content, Container, Title } from './Review.styles';

// eslint-disable-next-line react/prop-types
function ReviewList({ review }) {
  return (
    <Container>
      <Content>
        <Title>
          {review.summary}
        </Title>
        {review.body}
      </Content>
    </Container>
  );
}

export default ReviewList;
