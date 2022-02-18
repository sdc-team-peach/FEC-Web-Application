import React, { useState } from 'react';
import Reviews from './reviews/Reviews';
// eslint-disable-next-line import/no-named-as-default
import Related from './related/Related';
import Overview from './overview/Overview';
import AppContext from './AppContext';

function App() {
<<<<<<< HEAD
  const [globalProductId, setGlobalProductId] = useState(40344);
  const [globalProductInfo, setGlobalProductInfo] = useState(40344);
=======
  const [globalProductId, setGlobalProductId] = useState(40346);
  //40885 has sales

>>>>>>> f858a0b (card layout half done)
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
