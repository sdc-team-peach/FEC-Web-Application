import React, { useState } from 'react';
import {
  AddReviewContainer, UsernameForm, EmailForm, ReviewInputForm, Form, Button, FileForm, StarContainer,
} from './Modal.styles';
import StarRatings from '../ratings/Ratings';

// eslint-disable-next-line react/prop-types
function AddReview() {
  const [input, setInput] = useState({
    username: '', review: '', email: '', rate: 1, file: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
  }

  function handleUsernameChange(e) {
    setInput({ ...input, username: e.target.value });
  }

  function handleReviewChange(e) {
    setInput({ ...input, review: e.target.value });
  }

  function handleEmailChange(e) {
    setInput({ ...input, email: e.target.value });
  }

  function handleFileChange(e) {
    console.log(e);
    setInput({ ...input, file: e.target.value });
  }

  function addRating(num) {
    setInput({ ...input, rate: num });
  }

  const customStyles = {
    'font-size': '20px',
  };

  return (
    <AddReviewContainer>

      <Form onSubmit={(e) => { handleSubmit(e); }}>
        <h2>Rate your product!</h2>
        <StarContainer>
          <StarRatings styles={customStyles} isRating addRating={(num) => { addRating(num); }} />
        </StarContainer>
        <UsernameForm
          type="text"
          value={input.username}
          placeholder="enter your username..."
          onChange={(e) => { handleUsernameChange(e); }}
          required
        />
        <EmailForm
          type="email"
          value={input.email}
          placeholder="enter your email..."
          onChange={(e) => { handleEmailChange(e); }}
          required
        />
        <FileForm
          type="file"
          id="myFile"
          name="fileName"
          onChange={(e) => { handleFileChange(e); }}
        />
        <ReviewInputForm
          type="text"
          value={input.review}
          placeholder="Write your review..."
          onChange={(e) => { handleReviewChange(e); }}
          required
        />
        <Button type="submit"> Submit </Button>
      </Form>
    </AddReviewContainer>

  );
}

export default AddReview;
