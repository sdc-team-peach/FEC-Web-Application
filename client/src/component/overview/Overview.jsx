import React, { useContext, useState } from 'react';
import AppContext from '../AppContext';
import dataFetcher from '../../dataFetcher';
import ProductPhoto from './ProductPhoto';
import styleFetcher from './styleFetcher';
import Style from './Style';

function Overview() {
  const [currentPhoto, setCurrentPhoto] = useState('');
  const [currentProductStyle, setCurrentProductStyle] = useState('');
  const [productStyles, setProductStyles] = useState('');
  const myContext = useContext(AppContext);
  const productStyleInfo = styleFetcher();
  /* FUNCTIONAL TO GET PHOTO BELOW
  productStyleInfo.then((prodInfo) => {
    //remember to set loading to false
    const photo = prodInfo[0].photos[0].url;
    console.log('PHOTO:', photo);
    setCurrentPhoto(photo);
  });
  */
  productStyleInfo.then((prodInfo) => {
    setProductStyles(prodInfo);
    console.log(productStyles);
    setCurrentProductStyle(prodInfo[0].photos[0].url);
    // console.log(prodInfo);
  });
  return (
    <div>
      {productStyles.map((style) => <Style key={style.style_id} style={style} />)}
    </div>
  );
}

export default Overview;
