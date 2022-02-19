/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 200px;
  bottom: 200px;
  left: 150px;
  right:150px;
  /* width: 70%;
  height: 30vh; */
  background-color: white;
  border-radius: 25px;
  border: solid #e0e0e0 1px;
  margin: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: grid;
  grid-template-columns: 30% auto 30%;
  grid-template-rows: 16% 42% 42%;
  grid-template-areas:
    "leftpic header rightpic"
    "leftpic lefttext rightpic"
    "leftpic righttext rightpic";
`;

export const LeftPic = styled.div`
  grid-area: leftpic;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-size: cover;
  background-image: url(${(props) => props.background});
`;

export const RightPic = styled.div`
  grid-area: rightpic;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-size: cover;
  background-image: url(${(props) => props.background});
`;

export const Title = styled.h2`
  grid-area: header;
  font-size: 18px;
  font-family: 'Roboto+Mono', sans-serif;
  text-align: center;
  color: white;
  top: 20px;
`;

export const LeftDescription = styled.div`
  grid-area: lefttext;
  font-size: 15px;
  font-family: 'Roboto+Mono', sans-serif;
  text-align: center;
  color: white;
  top: 50%;
  background: grey;
`;

export const RightDescription = styled.div`
  grid-area: righttext;
  font-size: 15px;
  font-family: 'Roboto+Mono', sans-serif;
  text-align: center;
  color: white;
  top: 50%;
  background: grey;
`
