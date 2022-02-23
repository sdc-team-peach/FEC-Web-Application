import axios from 'axios';
import { useEffect, useContext, useReducer } from 'react';
import AppContext from '../../AppContext';

const ACTION = {
  MAKE_REQUEST: 'make-reqeust',
  GET_DATA: 'get-data',
  ERROR: 'error',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.MAKE_REQUEST:
      return { metaData: null, loading: true };
    case ACTION.GET_DATA:
      // eslint-disable-next-line max-len
      return { ...state, metaData: action.payload.metaData, loading: false };
    case ACTION.ERROR:
      return {
        ...state, metaData: null, loading: false, err: action.payload.err,
      };
    default:
      return state;
  }
}

const reviewMetaFetcher = () => {
  const { productId, setMetaCharacteristics } = useContext(AppContext);
  const request = productId;
  const [state, dispatch] = useReducer(reducer, { metaData: null, loading: true });

  useEffect(() => {
    dispatch({ type: ACTION.MAKE_REQUEST });
    axios.get('/products/review/meta', {
      params: {
        id: request,
      },
    })
      .then((res) => {
        dispatch({ type: ACTION.GET_DATA, payload: { metaData: res.data } });
        setMetaCharacteristics(res.data.characteristics);
      })
      .catch((e) => {
        dispatch({ type: ACTION.ERROR, payload: { err: e } });
      });
  }, [productId]);

  return state;
};

export default reviewMetaFetcher;
