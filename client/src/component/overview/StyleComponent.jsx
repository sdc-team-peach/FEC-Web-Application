import React, { useState, useEffect } from 'react';
import StyleFetcher from './StyleFetcher';
import Styles from './Styles';
import Sizes from './Sizes';

function StyleComponent() {
  const [allProductStyles, setAllProductStyles] = useState([]);
  const { styles, loading } = StyleFetcher();
  const [currentStyle, setCurrentStyle] = useState(null);
  useEffect(() => {
    setAllProductStyles([...allProductStyles, ...styles]);
    setCurrentStyle(styles[0]);
  }, [styles]);
  console.log(currentStyle);
  return (
    <div>
      {currentStyle && <img src={currentStyle.photos[0].url} alt="new"/>}
      {currentStyle && <p>{currentStyle.original_price}</p>}
      {currentStyle && Object.keys(currentStyle.skus).map((key) => <Sizes key={key} sizes={currentStyle.skus[key].size} inventory={currentStyle.skus[key].quantity} />)}
      <h2>Colors</h2>
      {!loading && allProductStyles.map((style) => <Styles key={style.style_id} style={style} />)}
    </div>
  );
}

export default StyleComponent;
