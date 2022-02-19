import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../AppContext';
import StarRatings from '../ratings/Ratings';
import reviewFetcher from './reviewFetcher';

function Reviews() {
  const reveiwData = reviewFetcher();
  return (
    <div>
<<<<<<< HEAD
      {/* {myContext.productId} */}
=======
      <StarRatings currentRate={4} isRating />
      {reveiwData.product_id}
>>>>>>> 3eb8882 (bundle minor changes)
    </div>
  );
}

export default Reviews;
