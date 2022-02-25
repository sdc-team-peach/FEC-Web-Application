import React, { useContext, useState, useEffect } from 'react';
import Select from 'react-select';
import AppContext from '../AppContext';
import { Button } from '../../GlobalStyle';
import reviewFetcher from './reviewFetcher';
import Breakdown from './breakdown/Breakdown';
import ReviewList from './ReviewList';
import {
  SelectContainer, ReviewTitle, ReviewListContainer, RatingBreakdownContainer, Container, WidgetTitle,
} from './Review.styles';

function Reviews() {
  const { productId, setModalReviewClicked } = useContext(AppContext);
  // state for all fetched reviews data
  const [currentReviews, setCurrentReviews] = useState([]);
  const [page, setPage] = useState(2);
  // state for all updating page number when more button is clicked
  const [sortby, setSortby] = useState('newest');

  // fetching data function
  const { reviews, loading } = reviewFetcher(sortby);
  // invoke when reviews variable chages
  // adding incoming data to reviewAll state
  useEffect(() => {
    if (reviews.length) {
      const setReviews = reviews.slice(0, page);
      setCurrentReviews(setReviews);
    }
  }, [reviews, page]);

  useEffect(() => () => {
    setPage(2);
    setCurrentReviews([]);
  }, [productId]);

  const options = [
    { value: 'newest', label: 'Newest' },
    { value: 'helpful', label: 'Helpful' },
    { value: 'relevant', label: 'Relevant' },
  ];

  // increment page number when button is clicked
  function incrementByTwo() {
    setPage((initial) => initial + 2);
  }

  function switchSort(e) {
    console.log(e.value);
    setSortby(e.value);
    setCurrentReviews([]);
  }

  function handleAddReview() {
    setModalReviewClicked((initial) => !initial);
  }

  const customStyles = {
    menuPortal: (provided) => ({ ...provided, zIndex: 0 }),
    menu: (provided) => ({ ...provided, zIndex: 0 }),
  };

  // console.log(reviewAll);
  return (
    <Container>

      <RatingBreakdownContainer>
        <WidgetTitle>
          Reviews
          {' '}
          <br />
          {' '}
          &amp; Ratings
        </WidgetTitle>
        <Breakdown />
      </RatingBreakdownContainer>
      <SelectContainer>
        <ReviewTitle>
          Reviews sorted by
        </ReviewTitle>
        <Select
          styles={customStyles}
          menuPortalTarget={document.body}
          menuPosition="fixed"
          options={options}
          onChange={(e) => switchSort(e)}
        />
      </SelectContainer>
      <ReviewListContainer>
        {loading && <h1>loading...</h1>}
        {!loading && currentReviews.map((review) => <ReviewList review={review} />)}
        <Button onClick={() => incrementByTwo()}> More Reviews </Button>
        <Button onClick={() => handleAddReview()}> Add a Review </Button>
      </ReviewListContainer>
    </Container>
  );
}

export default Reviews;
