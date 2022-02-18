import React, { useContext } from 'react';

// eslint-disable-next-line react/prop-types
function RelatedProductCard({ relatedProduct }) {
  return (
    <div>
      <div>
        {relatedProduct.results[0].style_id}
      </div>
    </div>
  );
}

export default RelatedProductCard;
