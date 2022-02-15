import React, { useContext } from 'react';
import AppContext from '../AppContext';

function Reviews() {
  const myContext = useContext(AppContext);

  return (
    <div>
      {myContext.productId}
    </div>
  );
}

export default Reviews;