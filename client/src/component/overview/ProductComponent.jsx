import React, { useState, useEffect, useContext } from 'react';
import ProductInfoFetcher from './ProductInfoFetcher';
import StarRatings from '../ratings/Ratings';
import AppContext from '../AppContext';

function ProductComponent() {
  const { productInfo, loading } = ProductInfoFetcher();
  const myContext = useContext(AppContext);
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
