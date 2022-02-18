import React from 'react';
// import { CardType } from './Types';
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextTitle,
  CardTextBody,
  CardTextPrice,
} from './CardStyle';

export function Card({
  title, imgUrl, price, body,
}) {
  return (
    <CardWrapper>
      <CardImage background={imgUrl} />
      <CardTextWrapper>
        <CardTextTitle>{title}</CardTextTitle>
        <CardTextBody>{body}</CardTextBody>
        <CardTextPrice>{price}</CardTextPrice>
      </CardTextWrapper>
    </CardWrapper>
  );
}
