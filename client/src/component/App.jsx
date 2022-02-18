import React, { useState } from 'react';
import Reviews from './reviews/Reviews';
// eslint-disable-next-line import/no-named-as-default
import Related from './related/Related';
import Overview from './overview/Overview';
import AppContext from './AppContext';

function App() {
  const [globalProductId, setGlobalProductId] = useState(40344);
  const [globalProductInfo, setGlobalProductInfo] = useState(40344);
  const productIdSetting = {
    productId: globalProductId,
    productInfo: globalProductInfo,
    setGlobalProductInfo,
    setGlobalProductId,
  };

  return (
    <AppContext.Provider value={productIdSetting}>
      <Overview />
      <Related />
      <Reviews />
    </AppContext.Provider>
  );
}

export default App;
