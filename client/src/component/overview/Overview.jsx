import React, { useContext, useState } from 'react';
import AppContext from '../AppContext';
import dataFetcher from '../../dataFetcher';
import ProductPhoto from './ProductPhoto';
import photoFetcher from './photoFetcher';

function Overview() {
  const [currentPhoto, setCurrentPhoto] = useState('');
  const myContext = useContext(AppContext);
  // console.log(myContext.productId);
  const productInfo = photoFetcher();
  // const photoCheck = productInfo[0];
  // // console.log(photoCheck);
  // let photoArray;
  // let currPhoto;

   productInfo.then((prodInfo) => {
    //remember to set loading to false
    const photo = prodInfo[0].photos[0].url;
    console.log('PHOTO:', photo);
    setCurrentPhoto(photo);
  });

  // const p = new Promise((resolve, reject) => {
  //   if (photoCheck.photos) {
  //     resolve(photoCheck.photos);
  //   }
  //   // else {
  //   //   reject('loading');
  //   // }
  // });
  // p.then((arr) => {
  //   photoArray = arr;
  //   console.log(photoArray);
  // });
  // // .catch((arr) => {
  // //   console.log(arr);
  // // });
  // p.then(() => {
  //   currPhoto = photoArray[0].url;
  //   console.log(currPhoto);
  // });
  // // const photoCheckTwo = photoCheck.photos;
  return (
    <div>
      overview!
      <p>
      {currentPhoto}
      </p>
      {/* <ProductPhoto /> */}
    </div>
  );
}

export default Overview;
