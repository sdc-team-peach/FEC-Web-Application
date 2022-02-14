import axios from 'axios';
import { useState, useEffect, useReducer } from 'react';

// const productDataFetch = (id) => {
//   const productId = id || 40344;
//   // const [productId, setProductId] = useState(currentId);
//   const [productInfo, setProductInfo] = useState([]);

//   // useMemo can make it faster getting data we already used
//   // const productData = useMemo(() => {
//   //   fetchData(productId);
//   // }, [productInfo]);

//   useEffect(() => {
//     axios.get('/products', {
//       params: {
//         id: productId,
//       },
//     })
//       .then((res) => {
//         setProductInfo(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return productInfo;
// };

const ACTION = {
  PRODUCT_INFO: 'productInfo',
  PRODUCT_STYLE: 'productStyle',
  RELATED_PRODUCT: 'relatedProduct',
  REVIEWS: 'review',
  META_REVIEW: 'metaReview',
};

function reducer(data, action) {
  if (action.type === ACTION.PRODUCT_INFO) {
    return { ...data, productInfo: action.getData };
  }
}

const productDataFetch = (id) => {
  const productId = id || 40344;

  const [state, dispatch] = useReducer(reducer, {
    product: productId,
    productInfo: [],
    productStyle: [],
    relatedProduct: [],
    reviews: [],
    meta_review: [],
  });

  // useMemo can make it faster getting data we already used
  // const productData = useMemo(() => {
  //   fetchData(productId);
  // }, [productInfo]);

  useEffect(() => {
    axios.get('/products', {
      params: {
        id: state.product,
      },
    })
      .then((res) => {
        console.log(res.data);
        dispatch({ type: 'productInfo', getData: res.data });
      });
    // dispatch({ type: 'productStyle' });
    // dispatch({ type: 'relatedProduct' });
    // dispatch({ type: 'reviews' });
    // dispatch({ type: 'metaReview' });
  }, []);

  return state;
};

export default productDataFetch;
