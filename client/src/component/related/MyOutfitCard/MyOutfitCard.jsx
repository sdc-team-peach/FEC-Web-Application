import React, { useContext, useState } from 'react';
// import '../../../dist/style.css';
import styled from 'styled-components';
import { IoIosRemoveCircle } from 'react-icons/io';
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
import StarRatings from '../../ratings/Ratings';

// need to work on removing thing that gets clicked from the state as well localstorage
function Card({
  title, imgUrl, price, body, salesPrice, handleRemove, id, secImgUrl,
}) {
  return (
    <CardWrapper>
      <CardImage background={imgUrl} secBackground={secImgUrl} />
      <IoIosRemoveCircle
        onClick={handleRemove}
        style={{
          position: 'fixed',
          top: '10px',
          left: '220px',
        }}
        size="20px"
        color="rgb(245,245,245)"
      />
      <CardTextWrapper>
        <StarRatings currentId={id} color="#cde306" />
        <CardTextTitle>{title}</CardTextTitle>
        <CardTextBody>{body}</CardTextBody>
        {salesPrice && <CardTextSalesPriceOriginal>{price}</CardTextSalesPriceOriginal>}
        {salesPrice && <CardTextSalesPrice>{`$${salesPrice}`}</CardTextSalesPrice>}
        {!salesPrice && <CardTextPrice>{price}</CardTextPrice>}
      </CardTextWrapper>
    </CardWrapper>
  );
}

function MyOutfitCard({ myOutfitProduct, setMyOutfit, myOutfits }) {
  console.log('before', myOutfits);
  const handleRemove = () => {
    const { id } = myOutfitProduct.info;
    localStorage.removeItem(id);
    const remove = myOutfits.filter((outfit) => {
      // console.log('testhbj', outfit);
      return outfit.info.id !== id;
    });
    // console.log('lastcheck', remove);
    setMyOutfit(remove);
  };
  return (
    <div>
      <span>
        <Card
          imgUrl={myOutfitProduct.style.photos[0].url}
          secImgUrl={myOutfitProduct.style.photos[1].url || 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png'}
          title={myOutfitProduct.info.name}
          body={myOutfitProduct.info.category}
          price={`$${myOutfitProduct.style.original_price}`}
          salesPrice={myOutfitProduct.style.sale_price}
          handleRemove={handleRemove}
          id={myOutfitProduct.info.id}
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