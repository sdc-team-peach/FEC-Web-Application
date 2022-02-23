import React, { useContext, useState } from 'react';
import '../../../dist/style.css';
import styled from 'styled-components';
import {
  CardWrapper,
  CardImage,
  ModalIcon,
  CardTextWrapper,
  CardTextTitle,
  CardTextBody,
  CardTextPrice,
  CardTextSalesPriceOriginal,
  CardTextSalesPrice,

} from '../Card/CardStyle';

function Card({
  title, imgUrl, price, body, salesPrice, handleRemove,
}) {
  return (
    <CardWrapper>
      <CardImage background={imgUrl} />
      <ModalIcon>-</ModalIcon>
      <CardTextWrapper>
        <CardTextTitle>{title}</CardTextTitle>
        <CardTextBody>{body}</CardTextBody>
        {salesPrice && <CardTextSalesPriceOriginal>{price}</CardTextSalesPriceOriginal>}
        {salesPrice && <CardTextSalesPrice>{`$${salesPrice}`}</CardTextSalesPrice>}
        {!salesPrice && <CardTextPrice>{price}</CardTextPrice>}
      </CardTextWrapper>
    </CardWrapper>
  );
};

function MyOutfitCard({ myOutfitProduct }) {
  return (
    <div>
      <span>
        <Card
          imgUrl={myOutfitProduct.style.photos[0].url}
          title={myOutfitProduct.info.name}
          body={myOutfitProduct.info.category}
          price={`$${myOutfitProduct.style.original_price}`}
          salesPrice={myOutfitProduct.style.sale_price}
          // handleModalOnclick={() => { myContext.setGlobalTheRelatedInfo(relatedProduct); myContext.setModalClicked(true); console.log(myContext.modalStatus); }}
        />
        {/* <div>
        {relatedProduct.results[0].photos[0].url}
      </div> */}
        {/* <Separator /> */}

      </span>
    </div>
  );
}

export default MyOutfitCard;
