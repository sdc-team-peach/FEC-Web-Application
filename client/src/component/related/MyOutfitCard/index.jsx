/* eslint-disable import/prefer-default-export */
// create the action card
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import AppContext from '../../AppContext';
import { Button } from '../../../GlobalStyle';

const ActionCardWrapper = styled.div`
  height: 400px;
  width: 250px;
  display: grid;
  grid-template-columns: 250px;
  grid-template-rows: 240px 160px;
  grid-template-areas: "text" "icon";
  /* border-radius: 18px; */
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  /* align-items: center; */
`;

const ActionCardText = styled.div`
  grid-area: text;
  font-size: 34px;
  font-weight: 1000;
  font-family: 'Roboto Serif', sans-serif;
  /* font-family: 'Roboto Mono', monospace; */
  color: #202020;
  padding-left:15px;
  padding-right: 20px;
  padding-top:60px;
  /* padding-bottom: 30px; */

`;

const ActionCardIcon = styled.div`
  grid-area: icon;
  padding-bottom: 30px;
  font-size: 30px;
  padding-left: 15px;

`;

// this is the first card in myoutfit list
export function MyOutfitActionCard({
  setMyOutfit, myOutfits
}) {
  const myContext = useContext(AppContext);
  const id = myContext.productId;
  const styleAndInfo = {
    style: myContext.productStyle,
    info: myContext.productInfo,
  };

  const saveToLocal = () => {
    localStorage.setItem(id, JSON.stringify(styleAndInfo));
    if (!myOutfits.some(outfit => outfit.info.id === id)) {
      setMyOutfit([...myOutfits, styleAndInfo]);
    }
    // setMyOutfit([...myOutfits, styleAndInfo]);
  };
  return (
    <ActionCardWrapper onClick={saveToLocal}>
      <ActionCardText>Add The Current Product</ActionCardText>
      <ActionCardIcon>
        +
      </ActionCardIcon>
    </ActionCardWrapper>
  );
}
