import React, { useState, useEffect } from 'react';
import dataFetcher from '../dataFetcher';
import Product from './Product';
import { Button, Container } from '../GlobalStyle';
import Reviews from './reviews/Reviews';
import Related from './related/Related';
import Overview from './overview/Overview';

function App() {
  return (
    <>
      <Overview />
      <Related />
      <Reviews />
    </>
  );
}

export default App;
