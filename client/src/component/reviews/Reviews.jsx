import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';

import { Button } from '../../GlobalStyle';
import { reviewFetcher, reviewMetaFetcher } from './reviewFetcher';
import ReviewList from './ReviewList';

function Reviews() {
  const [reviewAll, setReviewAll] = useState([]);
  const [page, setPage] = useState(1);
  const { reviews, loading } = reviewFetcher(page, 'newest', 2);

  useEffect(() => {
    setReviewAll([...reviewAll, ...reviews]);
  }, [reviews]);

  function incrementByTwo() {
    setPage((initial) => initial + 1);
  }
  console.log(reviewAll);
  return (
<<<<<<< HEAD
    <div>
<<<<<<< HEAD
      {/* {myContext.productId} */}
=======
      <StarRatings currentRate={4} isRating />
      {reveiwData.product_id}
>>>>>>> 3eb8882 (bundle minor changes)
    </div>
=======
    <>
      {loading && <h1>loading...</h1>}
      {!loading && reviewAll.map((review) => <ReviewList review={review} />)}
      {/* {reviews.results.map((review) => <ReviewList reveiw={review} />)} */}
      <Button onClick={() => incrementByTwo()}> More Reviews </Button>
    </>
>>>>>>> 0ac910e (bundle fetching review data and loading)
  );
}

export default Reviews;
