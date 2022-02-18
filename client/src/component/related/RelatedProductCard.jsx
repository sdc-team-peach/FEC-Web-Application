import React, { useContext } from 'react';
import '../../../dist/style.css';
import styled from 'styled-components';
import { Card } from './Card';

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

// eslint-disable-next-line react/prop-types
function RelatedProductCard({ relatedProduct }) {
  return (
    <div>
      <Card
        imgUrl={relatedProduct.results[0].photos[0].url}
        title={relatedProduct.results[0].product_id}/>
      {/* <div>
        {relatedProduct.results[0].photos[0].url}
      </div> */}
      <Separator />
    </div>
  );
}

export default RelatedProductCard;
