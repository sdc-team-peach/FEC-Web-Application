import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'styled-components-carousel';
import styled from 'styled-components';
import dataFetcher from '../../dataFetcher';
import AppContext from '../AppContext';
import { MyOutfitActionCard } from './MyOutfitCard';

function MyOutfit() {
  const [myOutfits, setMyOutfits] = useState(() => {
    var values = [];
    var keys = Object.keys(localStorage);
    var i = keys.length;
    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    return values;
  });
  console.log('myoutfits', myOutfits);
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
        {/* first is the action Card

        then map thru localstorage */}
        <MyOutfitActionCard setMyOutfitState={setMyOutfits} myOutfits={myOutfits} />
        <div>hello</div>
        <div>2</div>
        <div>3</div>

        {/* {relatedProducts.map(
          (relatedProduct) => <RelatedProductCard relatedProduct={relatedProduct} />,
        )} */}

      </Carousel>
      {/* {relatedProducts.map(
        (relatedProduct) => <RelatedProductCard relatedProduct={relatedProduct} />,
      )} */}
    </div>
  );
}

export default MyOutfit;
