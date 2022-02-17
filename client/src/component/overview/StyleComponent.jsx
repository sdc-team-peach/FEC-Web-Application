import React, { useState, useEffect } from 'react';
import StyleFetcher from './StyleFetcher';
import Styles from './Styles';

function StyleComponent() {
  const [allProductStyles, setAllProductStyles] = useState([]);
  const { styles, loading } = StyleFetcher();
  const [currentStyle, setCurrentStyle] = useState('');
  useEffect(() => {
    setAllProductStyles([...allProductStyles, ...styles]);
    setCurrentStyle(styles[0]);
  }, [styles]);
  return (
    <div>
      <h2>Colors</h2>
      {!loading && allProductStyles.map((style) => <Styles key={style.style_id} style={style} />)}
    </div>
  );
}

export default StyleComponent;
