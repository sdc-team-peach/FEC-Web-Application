import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'styled-components-carousel';
import styled from 'styled-components';
import dataFetcher from '../../dataFetcher';
import AppContext from '../AppContext';
import { MyOutfitActionCard } from './MyOutfitCard';
import MyOutfitCard from './MyOutfitCard/MyOutfitCard';

function MyOutfit() {
  const [myOutfits, setMyOutfits] = useState(() => {
    const values = [];
    const keys = Object.keys(localStorage);
    // let i = keys.length;
    // while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[0])));
    // }
    // for (var key in localStorage) {
    //   values[key] = JSON.parse(localStorage.getItem(key));
    // }
    return values;
  });
  console.log('myoutfitshere', myOutfits);
  return (
    <div>
      {/* <h2>
        Recommendation
      </h2> */}
      <Carousel
        slidesToShow={4}
        // infinite
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
        <MyOutfitActionCard setMyOutfit={setMyOutfits} myOutfits={myOutfits} />

        {myOutfits.map(
          (myOutfit) => <MyOutfitCard
          myOutfitProduct={myOutfit}
          setMyOutfit={setMyOutfits}
          myOutfits={myOutfits} />,
        )}

      </Carousel>
      {/* {relatedProducts.map(
        (relatedProduct) => <RelatedProductCard relatedProduct={relatedProduct} />,
      )} */}
    </div>
  );
}

export default MyOutfit;
