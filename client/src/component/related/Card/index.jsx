/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from 'react';
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

} from './CardStyle';

export function Card({
  title, imgUrl, price, body, salesPrice, handleModalOnclick,
}) {
  return (
    <CardWrapper>
      <CardImage background={imgUrl} />
      <ModalIcon onClick={handleModalOnclick}>⭐️</ModalIcon>
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
