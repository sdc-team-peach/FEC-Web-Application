import React, { useContext, useState } from 'react';
import AppContext from '../AppContext';
import Overview from './Overview';

function ProductMenu() {
  //price of currently rendered item
  const [price, setPrice] = useState();
  //if there is a sale price show sale price
  const [salePrice, setSalePrice] = useState();
  //create colors header then map over the styles extracting the thumbnail url

  return (
    <div>
      Product Menu
    </div>
  )
};

export default ProductMenu;
