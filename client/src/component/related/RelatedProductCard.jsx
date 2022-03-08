/* eslint-disable max-len */
import React, { useContext, useState } from 'react';
import '../../../dist/style.css';
import styled from 'styled-components';
import { Card } from './Card';
import AppContext from '../AppContext';

// const Separator = styled.span`
//   margin-left: 10px;
//   margin-right: 10px;
// `;

// eslint-disable-next-line react/prop-types
function RelatedProductCard({ relatedProduct }) {
  const myContext = useContext(AppContext);
  // console.log('where', relatedProduct);

  return (
    <div>
      <span>
        {relatedProduct.results
        && (
        <Card
          imgUrl={relatedProduct.results[0].photos.length === 0 ? 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png' : relatedProduct.results[0].photos[0].url}
          title={relatedProduct.title}
          body={relatedProduct.category}
          price={`$${relatedProduct.results[0].original_price}`}
          salesPrice={relatedProduct.results[0].sale_price}
          handleModalOnclick={() => { myContext.setGlobalTheRelatedInfo(relatedProduct); myContext.setModalClicked(true); }}
          id={relatedProduct.product_id}
          imgUrl2={relatedProduct.results[0].photos[1] || 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png'}
        />
        )}
        {/* <div>
        {relatedProduct.results[0].photos[0].url}
      </div> */}
        {/* <Separator /> */}

      </span>
    </div>
  );
}

export default RelatedProductCard;
