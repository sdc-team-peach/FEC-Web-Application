/* eslint-disable import/prefer-default-export */
import React, { useContext } from 'react';
import { ImCancelCircle } from 'react-icons/im';
import styled from 'styled-components';
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

  const DarkBG = styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    width: 100vw;
    height: 100vh;
    z-index: 9994;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    `;

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
          color="rgb(245,245,245)"
          onClick={handleClose}
          // onClick={myContext.setModalClicked(false)}
        />
        <LeftPic background={imgUrl1 || 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png'} />
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
        <RightPic background={imgUrl2 || 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png'} />
      </ModalWrapper>
      <DarkBG />

    </div>
  );
}
