import axios from 'axios';
import { useState, useEffect, useReducer } from 'react';

const dataFetcher = {
  productId: 40344,

  overviewFetcher() {
    const [productInfo, setProductInfo] = useState([]);
    const [productStyle, setProductStyle] = useState([]);
    useEffect(() => {
      axios.get('/products', {
        params: {
          id: this.productId,
        },
      })
        .then((res) => {
          setProductInfo(res.data);
        })
        .then(() => {
          axios.get('/products/styles', {
            params: {
              id: this.productId,
            },
          })
            .then((res) => {
              setProductStyle(res.data);
            });
        });
    }, []);
    return { info: productInfo, styles: productStyle };
  },

  reviewFetcher(pages, sort) {
    const [reviews, setReviews] = useState();

    useEffect(() => {
      axios.get('/products/review', {
        params: {
          id: this.productId,
          pages,
          sort,
        },
      })
        .then((res) => {
          setReviews(res.data);
        });
    }, []);

    return reviews;
  },

  reviewMetaFetcher() {
    const [metaReview, setMetaReviews] = useState();

    useEffect(() => {
      axios.get('/products/review/meta', {
        params: {
          id: this.productId,
        },
      })
        .then((res) => {
          setMetaReviews(res.data);
        });
    }, []);

    return metaReview;
  },

  relatedFetcher(endpoint) {

  },
};

// const ACTION = {
//   PRODUCT_INFO: 'productInfo',
//   PRODUCT_STYLE: 'productStyle',
//   RELATED_PRODUCT: 'relatedProduct',
//   REVIEWS: 'review',
//   META_REVIEW: 'metaReview',
// };

// function reducer(data, action) {
//   if (action.type === ACTION.PRODUCT_INFO) {
//     return { ...data, productInfo: action.getData };
//   }
// }

// const productDataFetch = (id) => {
//   const productId = id || 40344;

//   const [state, dispatch] = useReducer(reducer, {
//     product: productId,
//     productInfo: [],
//     productStyle: [],
//     relatedProduct: [],
//     reviews: [],
//     meta_review: [],
//   });

//   // useMemo can make it faster getting data we already used
//   // const productData = useMemo(() => {
//   //   fetchData(productId);
//   // }, [productInfo]);

//   useEffect(() => {
//     axios.get('/products', {
//       params: {
//         id: state.product,
//       },
//     })
//       .then((res) => {
//         console.log(res.data);
//         dispatch({ type: 'productInfo', getData: res.data });
//       });
//     // dispatch({ type: 'productStyle' });
//     // dispatch({ type: 'relatedProduct' });
//     // dispatch({ type: 'reviews' });
//     // dispatch({ type: 'metaReview' });
//   }, []);

//   return state;
// };

export default dataFetcher;
