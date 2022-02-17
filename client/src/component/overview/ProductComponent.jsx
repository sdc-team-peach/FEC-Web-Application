import React, { useState, useEffect } from 'react';
import ProductInfoFetcher from './ProductInfoFetcher';

function ProductComponent() {
  const { productInfo, loading } = ProductInfoFetcher();
  return (
    <div>
      <h2>Product</h2>
      {!loading && <p>{productInfo.name}</p>}
      {!loading && <p>{productInfo.slogan}</p>}
      {!loading && <p>{productInfo.description}</p>}
    </div>
  );
}

export default ProductComponent;
