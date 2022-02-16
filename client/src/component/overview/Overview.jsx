import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../AppContext';
import dataFetcher from '../../dataFetcher';
import ProductPhoto from './ProductPhoto';
import styleFetcher from './styleFetcher';
import Style from './Style';

function Overview() {
  // const [currentPhoto, setCurrentPhoto] = useState('');
  // const [currentProductStyle, setCurrentProductStyle] = useState('');
  const [allProductStyles, setAllProductStyles] = useState([]);
  console.log(styleFetcher());
  const { productStyles, loading } = styleFetcher();
  useEffect(() => {
    setAllProductStyles([...allProductStyles, productStyles]);
    console.log(allProductStyles);
  }, [productStyles]);
  // const myContext = useContext(AppContext);
  // const productStyleInfo = styleFetcher();
  /* FUNCTIONAL TO GET PHOTO BELOW
  productStyleInfo.then((prodInfo) => {
    //remember to set loading to false
    const photo = prodInfo[0].photos[0].url;
    console.log('PHOTO:', photo);
    setCurrentPhoto(photo);
  });
  */
  // productStyleInfo.then((prodInfo) => {
  //   setProductStyles(prodInfo);
  //   console.log(productStyles);
  //   setCurrentProductStyle(prodInfo[0].photos[0].url);
  //   // console.log(prodInfo);
  // });
  console.log(allProductStyles);
  console.log(productStyles);
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      Overview
      {/* {!loading && allProductStyles.map((style) => <Style style={style} />)} */}
    </div>
  );
}

export default Overview;
