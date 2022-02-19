import React, { useState, useEffect, useContext } from 'react';
import StyleFetcher from './StyleFetcher';
import Styles from './Styles';
import Sizes from './Sizes';
<<<<<<< HEAD
import AppContext from '../AppContext';
=======
import { Picture } from './Thumbnail.Styles';
>>>>>>> dfee445 (got styles to line up in rows)

function StyleComponent() {
  const myContext = useContext(AppContext);
  const [allProductStyles, setAllProductStyles] = useState([]);
  const { styles, loading } = StyleFetcher();
  const [currentStyle, setCurrentStyle] = useState(null);
  useEffect(() => {
    setAllProductStyles([...allProductStyles, ...styles]);
    setCurrentStyle(styles[0]);
    myContext.setGlobalProductStyle(styles[0]);
  }, [styles]);
  console.log(currentStyle);
  return (
    <div>
      {currentStyle && <p>{currentStyle.original_price}</p>}
      {currentStyle && Object.keys(currentStyle.skus).map((key) => <Sizes key={key} sizes={currentStyle.skus[key].size} inventory={currentStyle.skus[key].quantity} />)}
      <h2>Colors</h2>
      <Picture>
      {!loading && allProductStyles.map((style) => <Styles key={style.style_id} style={style} />)}
      </Picture>
    </div>
  );
}

export default StyleComponent;
