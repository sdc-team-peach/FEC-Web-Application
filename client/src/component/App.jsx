import React, { useState } from 'react';
import Reviews from './reviews/Reviews';
// eslint-disable-next-line import/no-named-as-default
import Related from './related/Related';
import Overview from './overview/Overview';
import AppContext from './AppContext';
import { ComparisonModal } from './related/ComparisonModal';


function App() {
  const [globalProductId, setGlobalProductId] = useState(40344);
  const [globalProductInfo, setGlobalProductInfo] = useState();
  const [globalTheRelatedInfo, setGlobalTheRelatedInfo] = useState('hello');
  const [modalClicked, setModalClicked] = useState(false);

  const productIdSetting = {
    productId: globalProductId,
    productInfo: globalProductInfo,
    theRelatedInfo: globalTheRelatedInfo,
    modalStatus: modalClicked,
    setGlobalProductInfo,
    setGlobalProductId,
    setGlobalTheRelatedInfo,
    setModalClicked,
  };

  return (
    <div>
      <AppContext.Provider value={productIdSetting}>
        <Overview />
        <Related />
        <Reviews />
        {modalClicked && <ComparisonModal />}
      </AppContext.Provider>
    </div>
  );
}

export default App;
