/* eslint-disable import/prefer-default-export */
// create the action card
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import AppContext from '../../AppContext';

const ActionCardWrapper = styled.div`
  height: 400px;
  width: 250px;
  display: grid;
  grid-template-columns: 250px;
  grid-template-rows: 200px 200px;
  grid-template-areas: "text" "icon";
  /* border-radius: 18px; */
  background: white;

  text-align: center;
`;

const ActionCardText = styled.div`
`;

const ActionCardIcon = styled.a`
`;

export function MyOutfitActionCard({
  setMyOutfitState, myOutfits
}) {
  const myContext = useContext(AppContext);
  const id = myContext.productId;
  const styleAndInfo = {
    style: myContext.productStyle,
    info: myContext.productInfo,
  };

  const saveToLocal = () => {
    localStorage.setItem(id, JSON.stringify(styleAndInfo));
    setMyOutfitState([...myOutfits, styleAndInfo]);
  };
  return (
    <ActionCardWrapper>
      <ActionCardText>Click to add to my outfit</ActionCardText>
      <ActionCardIcon onClick={saveToLocal}>+</ActionCardIcon>
    </ActionCardWrapper>
  );
}


