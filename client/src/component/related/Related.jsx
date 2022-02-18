import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'styled-components-carousel';
import dataFetcher from '../../dataFetcher';
import AppContext from '../AppContext';
import RelatedProductCard from './RelatedProductCard';


function Related() {
  const myContext = useContext(AppContext);

  // const fetchingRelated = async () => {
  //   const res = await axios.get('/products/related', {
  //     params: { id: myContext.productId },
  //   });
  //   return res.data;
  // };

  const [relatedProducts, setRelatedProducts] = useState([]);

  // const fetchingRelated = async () => {
  //   const res = await axios.get('/products/related', {
  //     params: { id: myContext.productId },
  //   });
  //   return res.data;
  // };

  // useEffect(() => {
  //   dataFetcher.relatedFetcher(myContext.productId, setRelatedProducts);
  // }, []);

  const fetchingRelated = async () => {
    const res = await axios.get('/products/related', {
      params: { id: myContext.productId },
    });
    setRelatedProducts(res.data);
  };

  useEffect(() => {
    fetchingRelated();
  }, []);

  console.log(relatedProducts);

  // const relatedProducts = dataFetcher.relatedFetcher(myContext.productId);
  // console.log(relatedProducts);

  return (
    <div>
      {/* <Carousel
        slidesToShow={4}
        center
        centerPadding={30}
        breakpoints={[
          {
            size: 200,
            settings: {
              slidesToShow: 1,
              showArrows: false,
              showIndicator: false,
              swipeable: true,
            },
          },
          {
            size: 600,
            settings: {
              slidesToShow: 3,
              showArrows: false,
              showIndicator: true,
              swipeable: true,
            },
          },
          {
            size: 1000,
            settings: {
              slidesToShow: 4,
              showArrows: false,
              showIndicator: true,
              swipeable: true,
            },
          },
          {
            size: 1400,
            settings: {
              slidesToShow: 5,
              showArrows: true,
              showIndicator: true,
              center: true,
              swipeable: true,
            },
          },
        ]}
      >
        {relatedProducts.map(
          (relatedProduct) => <RelatedProductCard relatedProduct={relatedProduct} />,
        )}
      </Carousel> */}
      {relatedProducts.map(
        (relatedProduct) => <RelatedProductCard relatedProduct={relatedProduct} />,
      )}
    </div>
  );
}

export default Related;
