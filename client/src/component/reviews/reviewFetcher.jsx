import axios from 'axios';
import {
  useState, useEffect, useContext, useReducer,
} from 'react';
import AppContext from '../AppContext';

// const reviewFetcher = (pages, sort, count) => {
//   const myContext = useContext(AppContext);
//   const [reviews, setReviews] = useState([]);
//   const [loadingReview, setLoadingReviews] = useState(true);

//   const fetchingReviewData = async () => {
//     const resReviews = await axios.get('/products/review', {
//       params: {
//         id: myContext.productId,
//         pages,
//         sort,
//         count,
//       },
//     });
//     setReviews(resReviews.data);
//     setLoadingReviews(false);
//   };

//   useEffect(() => {
//     fetchingReviewData();

//     // return () => setLoadingReviews(false);
//   }, []);

//   return { reviews, loadingReview };
// };

const ACTION = {
  MAKE_REQUEST: 'make-reqeust',
  GET_DATA: 'get-data',
  ERROR: 'error',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.MAKE_REQUEST:
      return { reviews: [], loading: true };
    case ACTION.GET_DATA:
      // eslint-disable-next-line max-len
      return { ...state, reviews: action.payload.reviews.results, loading: false };
    case ACTION.ERROR:
      return {
        ...state, reviews: [], loading: false, err: action.payload.err,
      };
    default:
      return state;
  }
}

const reviewFetcher = (pages, sort, count) => {
  const myContext = useContext(AppContext);
  const [state, dispatch] = useReducer(reducer, { reviews: [], loading: true });

  useEffect(() => {
    dispatch({ type: ACTION.MAKE_REQUEST });
    axios.get('/products/review', {
      params: {
        id: myContext.productId,
        pages,
        sort,
        count,
      },
    })
      .then((res) => {
        dispatch({ type: ACTION.GET_DATA, payload: { reviews: res.data } });
      })
      .catch((e) => {
        dispatch({ type: ACTION.ERROR, payload: { err: e } });
      });
  }, [pages, sort, count]);

  return state;
};

const reviewMetaFetcher = () => {
  const myContext = useContext(AppContext);
  const [metaReview, setMetaReviews] = useState([]);
  const [loadingMeta, setLoadingMeta] = useState(true);

  const fetchingReviewData = async () => {
    const resMeta = await axios.get('/products/review/meta', {
      params: {
        id: myContext.productId,
      },
    });
    setMetaReviews(resMeta.data);
  };

  useEffect(() => {
    fetchingReviewData();
    return () => setLoadingMeta(false);
  }, []);

  return { metaReview, loadingMeta };
};

export { reviewFetcher, reviewMetaFetcher };
