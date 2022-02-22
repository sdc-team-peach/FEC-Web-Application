import React, { useContext, useEffect, useState } from 'react';
import ProductInfoFetcher from './ProductInfoFetcher';
import StarRatings from '../ratings/Ratings';
import AppContext from '../AppContext';

function ProductComponent() {
  const myContext = useContext(AppContext);
  const { productInfo, loading } = ProductInfoFetcher();
  // const [currentInfo, setCurrentInfo] = useState(null);
  // const [currentStyle, setCurrentStyle] = useState(null);

  // useEffect(() => {
  //   setCurrentInfo(myContext.productInfo);
  //   setCurrentStyle(myContext.productStyle);
  // });

  return (
    <div>
      {!loading && <h1>{productInfo.name}</h1>}
      {!loading && <StarRatings currentId={myContext.productId} />}
      {!loading && <p>{productInfo.slogan}</p>}
      {!loading && <p>{productInfo.description}</p>}
    </div>
  );
}

export default ProductComponent;
