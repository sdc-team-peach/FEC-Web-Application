import axios from 'axios';
import {
  useState, useEffect, useContext, useReducer,
} from 'react';
import AppContext from '../AppContext';

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

const reviewFetcher = (sort) => {
  const { productId, reviewSubmitted } = useContext(AppContext);
  const [state, dispatch] = useReducer(reducer, { reviews: [], loading: true });

  useEffect(() => {
    dispatch({ type: ACTION.MAKE_REQUEST });
    axios.get('/products/review', {
      params: {
        id: productId,
        sort,
        count: 1000,
      },
    })
      .then((res) => {
        dispatch({ type: ACTION.GET_DATA, payload: { reviews: res.data } });
      })
      .catch((e) => {
        dispatch({ type: ACTION.ERROR, payload: { err: e } });
      });
  }, [sort, productId, reviewSubmitted]);

  return state;
};

export default reviewFetcher;
