import React from 'react';
import {
  Container, UsernameForm, EmailForm, Title, ReviewSummaryForm, ModalWrapper,
  ReviewInputForm, Form, Button, FileForm,
} from './Modal.styles';
import AppContext from '../../AppContext';

// eslint-disable-next-line react/prop-types
function AddReview({ input, setInput }) {
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
    setInput({ ...input, file: [...input.file, e.target.value] });
  }

  function handleSummaryChange(e) {
    setInput({ ...input, summary: e.target.value });
  }

  return (
    <ModalWrapper>
      <Container>
        <Form onSubmit={(e) => { handleSubmit(e); }}>
          <Title>Tell us how we did!</Title>
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
          <ReviewSummaryForm
            type="text"
            value={input.summary}
            placeholder="Write your title..."
            onChange={(e) => { handleSummaryChange(e); }}
            required
          />
          <ReviewInputForm
            type="text"
            value={input.review}
            placeholder="Write your review..."
            onChange={(e) => { handleReviewChange(e); }}
            required
          />
        </Form>
      </Container>
    </ModalWrapper>
  );
}

// return (
//   <AddReviewContainer>
//     <Form onSubmit={(e) => { handleSubmit(e); }}>
//       <Title>Rate your product!</Title>
//       <StarContainer>
//         <StarRatings isRating addRating={(num) => { addRating(num); }} />
//       </StarContainer>
//       <UsernameForm
//         type="text"
//         value={input.username}
//         placeholder="enter your username..."
//         onChange={(e) => { handleUsernameChange(e); }}
//         required
//       />
//       <EmailForm
//         type="email"
//         value={input.email}
//         placeholder="enter your email..."
//         onChange={(e) => { handleEmailChange(e); }}
//         required
//       />
//       <FileForm
//         type="file"
//         id="myFile"
//         name="fileName"
//         onChange={(e) => { handleFileChange(e); }}
//       />
//       <ReviewSummaryForm
//         type="text"
//         value={input.summary}
//         placeholder="Write your title..."
//         onChange={(e) => { handleSummaryChange(e); }}
//         required
//       />
//       <ReviewInputForm
//         type="text"
//         value={input.review}
//         placeholder="Write your review..."
//         onChange={(e) => { handleReviewChange(e); }}
//         required
//       />
//       <Button type="submit"> Submit </Button>
//     </Form>
//   </AddReviewContainer>

// );

export default AddReview;
