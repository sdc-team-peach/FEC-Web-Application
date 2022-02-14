import React, { useState, useEffect } from 'react';
import productDataFetch from '../dataFetcher';
import Product from './Product';
import { Button, Container } from '../GlobalStyle';

// function App() {
//   return <div>Hello World!</div>;
// }
// myStorage = window.localStorage;

function App() {
  const data = productDataFetch();
  console.log(data);
  return (
    <Button>
      {' '}
      {data.product}
      {' '}
    </Button>
  );
}

export default App;
