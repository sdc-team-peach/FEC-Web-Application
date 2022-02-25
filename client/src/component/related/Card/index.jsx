/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { AiFillStar } from 'react-icons/ai';
import AppContext from '../../AppContext';
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
import StarRatings from '../../ratings/Ratings';

export function Card({
  title, imgUrl, price, body, salesPrice, handleModalOnclick, id, imgUrl2,
}) {
  const { setGlobalProductId } = useContext(AppContext);
  // let img = '';
  // if (imgUrl == null) {
  //   img = 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png';
  // } else {
  //   img = imgUrl;
  // }
  // const img = imgUrl || './Image-Not-Available.png';
  function handleChangeId() {
    console.log(id);
    setGlobalProductId(id);
  }

  return (
    <CardWrapper onClick={() => handleChangeId()}>
      <CardImage
        background={imgUrl || 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png'}
        secBackground={imgUrl2.url}
      />
      <AiFillStar
        onClick={handleModalOnclick}
        style={{
          position: 'fixed',
          top: '10px',
          left: '220px',
        }}
        size="20px"
        color="rgb(245,245,245)"
      />
      <CardTextWrapper>
        <StarRatings
          currentId={id}
          color="#cde306"
        />
        <CardTextTitle>{title}</CardTextTitle>
        <CardTextBody>{body}</CardTextBody>
        {salesPrice && <CardTextSalesPriceOriginal>{price}</CardTextSalesPriceOriginal>}
        {salesPrice && <CardTextSalesPrice>{`$${salesPrice}`}</CardTextSalesPrice>}
        {!salesPrice && <CardTextPrice>{price}</CardTextPrice>}
      </CardTextWrapper>
    </CardWrapper>
  );
}
