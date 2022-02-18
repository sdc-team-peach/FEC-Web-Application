/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextTitle,
  CardTextBody,
  CardTextPrice,
  CardTextSalesPriceOriginal,
  CardTextSalesPrice,

} from './CardStyle';

export function Card({
  title, imgUrl, price, body, salesPrice,
}) {
  console.log(salesPrice);

  return (
    <CardWrapper>
      <CardImage background={imgUrl} />
      <CardTextWrapper>
        <CardTextTitle>{title}</CardTextTitle>
        <CardTextBody>{body}</CardTextBody>
        {salesPrice && <CardTextSalesPriceOriginal>{price}</CardTextSalesPriceOriginal>}
        {salesPrice && <CardTextSalesPrice>{`$${salesPrice}`}</CardTextSalesPrice>}
        {!salesPrice && <CardTextPrice>{price}</CardTextPrice>}
      </CardTextWrapper>
    </CardWrapper>
  );
}
