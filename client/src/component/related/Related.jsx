/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
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

  // const fetchingRelated = async () => {
  //   const res1 = await axios.get('/products/related/styles', {
  //     params: { id: myContext.productId },
  //   });
  //   const res2 = await axios.get('/products/related', {
  //     params: { id: myContext.productId },
  //   });
  //   console.log('tyles:', res1.data, 'info:', res2.data);
  //   const result = res1.data.map((style) => {
  //     for (const item of res2.data) {
  //       // console.log(item.id)
  //       if (Number(style.product_id) === item.id) {
  //         // eslint-disable-next-line no-param-reassign
  //         style.title = item.name;
  //         // eslint-disable-next-line no-param-reassign
  //         style.category = item.category;
  //         style.features = item.features;
  //       }
  //     }
  //     return style;
  //   });
  //   setRelatedProducts(result);
  // };

  useEffect(() => {
    const fetchingRelated = async () => {
      const res1 = await axios.get('/products/related/styles', {
        params: { id: myContext.productId },
      });
      const res2 = await axios.get('/products/related', {
        params: { id: myContext.productId },
      });
      console.log('tyles:', res1.data, 'info:', res2.data);
      const result = res1.data.map((style) => {
        for (const item of res2.data) {
          // console.log(item.id)
          if (Number(style.product_id) === item.id) {
            // eslint-disable-next-line no-param-reassign
            style.title = item.name;
            // eslint-disable-next-line no-param-reassign
            style.category = item.category;
            style.features = item.features;
          }
        }
        return style;
      });
      setRelatedProducts(result);
    };
    fetchingRelated();
  }, [myContext.productId]);
  console.log('benjue', relatedProducts);

  // const relatedProducts = dataFetcher.relatedFetcher(myContext.productId);
  // console.log(relatedProducts);
  const changeProduct = (newId) => {
    myContext.setGlobalProductId(newId);
  };

  return (
    <div>
      {/* <h2>
        Recommendation
      </h2> */}
      <Carousel
        slidesToShow={4}
        infinite
        center={false}
        centerPadding={30}
        // breakpoints={[
        //   {
        //     size: 200,
        //     settings: {
        //       slidesToShow: 1,
        //       showArrows: false,
        //       showIndicator: false,
        //       swipeable: true,
        //     },
        //   },
        //   {
        //     size: 600,
        //     settings: {
        //       slidesToShow: 3,
        //       showArrows: false,
        //       showIndicator: true,
        //       swipeable: true,
        //     },
        //   },
        //   {
        //     size: 1000,
        //     settings: {
        //       slidesToShow: 1,
        //       showArrows: false,
        //       showIndicator: true,
        //       swipeable: true,
        //     },
        //   },
        //   {
        //     size: 2560,
        //     settings: {
        //       slidesToShow: 1,
        //       showArrows: true,
        //       showIndicator: false,
        //       center: true,
        //       swipeable: true,
        //     },
        //   },
        // ]}
      >

        {relatedProducts.map(
          (relatedProduct) => (
            <RelatedProductCard
              relatedProduct={relatedProduct}
              // onClick={changeProduct(relatedProduct.product_id)}
            />
          ),
        )}

      </Carousel>
      {/* {relatedProducts.map(
        (relatedProduct) => <RelatedProductCard relatedProduct={relatedProduct} />,
      )} */}
    </div>
  );
}

export default Related;
