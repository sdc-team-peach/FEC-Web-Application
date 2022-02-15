import React, { useState, useEffect } from 'react';
import dataFetcher from '../dataFetcher';
import Product from './Product';
import { Button, Container } from '../GlobalStyle';
import Reviews from './reviews/Reviews';
import Related from './related/Related';
import Overview from './overview/Overview';

function App() {
  const data = dataFetcher.relatedFetcher();
  console.log(data);
  return (
    <>
      <Overview />
      <Related />
      <Reviews />
    </>
  );
}

export default App;
