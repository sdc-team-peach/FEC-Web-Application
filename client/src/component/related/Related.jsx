import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'styled-components-carousel';
import styled from 'styled-components';
import dataFetcher from '../../dataFetcher';
import AppContext from '../AppContext';
import RelatedProductCard from './RelatedProductCard';

function Related() {
  const myContext = useContext(AppContext);

  const [relatedProducts, setRelatedProducts] = useState([]);

  const fetchingRelated = async () => {
    const res1 = await axios.get('/products/related/styles', {
      params: { id: myContext.productId },
    });
    const res2 = await axios.get('/products/related', {
      params: { id: myContext.productId },
    });
    console.log(res1.data, res2.data);
    const result = res1.data.map((style) => {
      for (let item of res2.data) {
        // console.log(item.id)
        if (Number(style.product_id) === item.id) {
          style.title = item.name;
          style.slogan = item.slogan;
        }
      }
      return style;
    });
    setRelatedProducts(result);
  };

  useEffect(() => {
    fetchingRelated();
  }, []);

  console.log(relatedProducts);

  // const relatedProducts = dataFetcher.relatedFetcher(myContext.productId);
  // console.log(relatedProducts);

  return (
    <div>
      <h2>
        Recommendation
      </h2>
      <Carousel
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
      </Carousel>
      {/* {relatedProducts.map(
        (relatedProduct) => <RelatedProductCard relatedProduct={relatedProduct} />,
      )} */}
    </div>
  );
}

export default Related;
