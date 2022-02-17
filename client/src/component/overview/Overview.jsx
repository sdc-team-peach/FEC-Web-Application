import React, { useState, useEffect } from 'react';
// import AppContext from '../AppContext';
// import dataFetcher from '../../dataFetcher';
// import ProductPhoto from './ProductPhoto';
// import ProductInfoFetcher from './ProductInfoFetcher';
// import StyleFetcher from './StyleFetcher';
// import Styles from './Styles';
import StyleComponent from './StyleComponent';
import ProductComponent from './ProductComponent';

function Overview() {
  // const [allProductStyles, setAllProductStyles] = useState([]);
  // const { styles, loading } = StyleFetcher();
  // const [currentStyle, setCurrentStyle] = useState('');
  // useEffect(() => {
  //   setAllProductStyles([...allProductStyles, ...styles]);
  //   setCurrentStyle(styles[0]);
  // }, [styles]);

  return (
    <div>
      Overview
      <ProductComponent />
      <StyleComponent />
    </div>
  );
}

export default Overview;
