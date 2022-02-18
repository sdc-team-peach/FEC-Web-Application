import React, { useState, useEffect } from 'react';
import ProductInfoFetcher from './ProductInfoFetcher';

function ProductComponent() {
  const { productInfo, loading } = ProductInfoFetcher();
  return (
    <div>
      {!loading && <h1>{productInfo.name}</h1>}
      {!loading && <p>{productInfo.slogan}</p>}
      {!loading && <p>{productInfo.description}</p>}
    </div>
  );
}

export default ProductComponent;
