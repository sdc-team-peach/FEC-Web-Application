/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  ModalWrapper, LeftPic, RightPic, Title, LeftDescription, RightDescription,
} from './ModalStyle';

export function Modal({
  imgUrl1, imgUrl2, currentProduct, comparedProduct,
}) {
  return (
    <div>
      <ModalWrapper>
        <LeftPic backround={imgUrl1} />

        <Title>Comparing</Title>
        <LeftDescription>

          <div>
            {currentProduct.name}
          </div>
          <div>
            {currentProduct.features.map((feature) => (
              <div>
                {feature.feature}
                :
                {' '}
                {feature.value}
              </div>
            ))}
          </div>

        </LeftDescription>
        {/* <LeftArrow /> */}
        <RightDescription>
          <div>
            {comparedProduct.name}
          </div>
          <div>
            {comparedProduct.features.map((feature) => (
              <div>
                {feature.feature}
                :
                {' '}
                {feature.value}
              </div>
            ))}
          </div>
        </RightDescription>
        {/* <RightArrow /> */}
        <RightPic background={imgUrl2} />
      </ModalWrapper>

    </div>
  );
}
