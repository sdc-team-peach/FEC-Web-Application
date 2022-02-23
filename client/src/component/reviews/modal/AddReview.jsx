import React, { useState } from 'react';
import axios from 'axios';
import {
  Container, UsernameForm, EmailForm, Title, ReviewSummaryForm, ModalWrapper,
  ReviewInputForm, Form, Button, FileForm,
} from './Modal.styles';
import AppContext from '../../AppContext';

// eslint-disable-next-line react/prop-types
function AddReview({ input, setInput, post }) {
  const [images, setImages] = useState([]);
  function handleUsernameChange(e) {
    setInput({ ...input, name: e.target.value });
  }

  function handleReviewChange(e) {
    setInput({ ...input, body: e.target.value });
  }

  function handleEmailChange(e) {
    setInput({ ...input, email: e.target.value });
  }

  function handleFileChange(e) {
    const photoFiles = e.target.files;
    const uploader = Object.values(photoFiles).map((item) => {
      const imageData = new FormData();
      imageData.append('file', item);
      imageData.append('upload_preset', 'inny_fec');
      imageData.append('cloud_name', 'dhx5k7wb3');
      return axios.post('https://api.cloudinary.com/v1_1/dhx5k7wb3/image/upload', imageData);
    });

    axios.all(uploader)
      .then(
        axios.spread((...response) => {
          const urlAll = response.map((item) => item.data.url);
          setInput({ ...input, photos: urlAll });
        }),
      );
  }

  function handleSummaryChange(e) {
    setInput({ ...input, summary: e.target.value });
  }

  function handleRecommendChange(e) {
    setInput({ ...input, recommend: !input.recommend });
  }

  function handleSubmit(e) {
    e.preventDefault();
    post();
  }

  return (
    <ModalWrapper>
      <Container>
        <Form onSubmit={(e) => { handleSubmit(e); }}>
          <Title>Tell us how we did!</Title>
          <p>
            Do you recommend this product? &nbsp;&nbsp; Yes &nbsp;
            <input
              type="radio"
              checked={input.recommend}
              onClick={(e) => { handleRecommendChange(e); }}
            />
          </p>
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
            multiple="multiple"
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
          <Button type="submit"> Submit </Button>
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
