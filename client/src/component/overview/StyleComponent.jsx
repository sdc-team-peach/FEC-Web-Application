import React, { useState, useEffect, useContext } from 'react';
import { TextSalesPriceOriginal, TextSalesPrice, TextPrice } from '../../GlobalStyle';
import StyleFetcher from './StyleFetcher';
import Styles from './Styles';
import Sizes from './Sizes';

import AppContext from '../AppContext';

import { Picture } from './Thumbnail.Styles';

import SizesDropdownMenu from './SizesDropdownMenu';

import QuantityDropdownMenu from './QuantityDropdownMenu';

import AddToCartButton from './AddToCartButton';

function StyleComponent() {
  const myContext = useContext(AppContext);
  const [allProductStyles, setAllProductStyles] = useState([]);
  const { styles, loading } = StyleFetcher();
  const [currentStyle, setCurrentStyle] = useState(null);

  useEffect(() => {
    setAllProductStyles(styles);
    setCurrentStyle(styles[0]);
    myContext.setGlobalProductStyle(styles[0]);
  }, [styles]);

  useEffect(() => {
    setCurrentStyle(myContext.productStyle);
  }, [myContext.productStyle]);

  return (
    <>
  <h1>

{currentStyle && currentStyle.sale_price && <TextSalesPriceOriginal> ${currentStyle.original_price} </TextSalesPriceOriginal>}
      {currentStyle && currentStyle.sale_price && <TextSalesPrice> ${currentStyle.sale_price} </TextSalesPrice>}
      {currentStyle && !currentStyle.sale_price && <TextPrice> ${currentStyle.original_price} </TextPrice>}
  </h1>
  <div>
      <Picture>
        {!loading && allProductStyles.map((style, index) =>
       <Styles
       key={index}
       style={style}
       styles={styles}
       />)}
      </Picture>
       {currentStyle && <SizesDropdownMenu sizes={currentStyle.skus} />}
       {currentStyle && <QuantityDropdownMenu quantity={currentStyle.skus} />}
       {currentStyle && <AddToCartButton />}
    </div>
    </>
  );
}

export default StyleComponent;
