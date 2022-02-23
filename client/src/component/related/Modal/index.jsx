/* eslint-disable import/prefer-default-export */
import React, { useContext } from 'react';
import { ImCancelCircle } from 'react-icons/im';
import {
  ModalWrapper, LeftPic, RightPic, Title, LeftDescription, LeftTitle, RightTitle, LeftFeatures, RightFeatures, RightDescription,
} from './ModalStyle';
import AppContext from '../../AppContext';

export function Modal({
  imgUrl1, imgUrl2, currentProduct, comparedProduct,
}) {
  const myContext = useContext(AppContext);

  const handleClose = () => {
    myContext.setModalClicked(false);
  };

  return (
    <div>
      <ModalWrapper>
        <ImCancelCircle
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
          }}
          size="20px"
          color="white"
          onClick={handleClose}
          // onClick={myContext.setModalClicked(false)}
        />
        <LeftPic background={imgUrl1} />
        <Title>Comparing</Title>
        <LeftDescription>
          <LeftTitle>
            {' '}
            {currentProduct.name}
          </LeftTitle>
          <LeftFeatures>
            {currentProduct.features.map((feature) => (
              <p>
                {feature.feature}
                :
                {' '}
                {feature.value}
              </p>
            ))}
          </LeftFeatures>
        </LeftDescription>
        {/* <LeftArrow /> */}
        <RightDescription>
          <RightTitle>
            {comparedProduct.title}
          </RightTitle>
          <RightFeatures>
            {comparedProduct.features.map((feature) => (
              <div>
                {feature.feature}
                :
                {' '}
                {feature.value}
              </div>
            ))}
          </RightFeatures>
        </RightDescription>
        {/* <RightArrow /> */}
        <RightPic background={imgUrl2} />
      </ModalWrapper>

    </div>
  );
}
