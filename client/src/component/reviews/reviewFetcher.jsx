import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import AppContext from '../AppContext';

const reviewFetcher = () => {
  const myContext = useContext(AppContext);
  const [metaReview, setMetaReviews] = useState('');
  // const [loading, setLoading] = useState(true);

  const fetchingReviewMeta = async () => {
    const res = await axios.get('/products/review/meta', {
      params: {
        id: myContext.productId,
      },
    });
    setMetaReviews(res.data);
  };

  useEffect(() => {
    fetchingReviewMeta();
    // return () => setLoading(false);
  }, []);

  return metaReview;
};

export default reviewFetcher;
