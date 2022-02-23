/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 170px;
  bottom: 170px;
  left: 150px;
  right:150px;
  /* width: 70%;
  height: 30vh; */
  background-color: rgb(240,240,240);
  border-radius: 25px;
  border: solid #e0e0e0 1px;
  margin: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: grid;
  grid-template-columns: 30% auto 30%;
  grid-template-rows: 20% 35% auto 35%;
  grid-template-areas:
    "leftpic header rightpic"
    "leftpic lefttext rightpic"
    "leftpic break rightpic"
    "leftpic righttext rightpic";
  /* padding: 10px; */
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4), 0 12px 40px 0 rgba(0, 0, 0, 0.4);
  z-index: 9995;
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
  font-size: 6vh;
  font-family: 'Roboto+Mono', sans-serif;
  text-align: center;
  color: black;
  padding: 5px;
`;
// containner for left description
export const LeftDescription = styled.div`
  grid-area: lefttext;
  /* font-size: 15px;
  font-family: 'Roboto+Mono', sans-serif;
  text-align: center;
  color: white;
  top: 50%; */

`;

export const LeftTitle = styled.div`
  font-size: 20px;
  font-family: 'Roboto+Mono', sans-serif;
  text-align: center;
  color: grey;
  /* top: 50%; */
  /* padding: 10px; */
`;

export const LeftFeatures = styled.div`
  font-size: 15px;
  font-family: 'Roboto+Mono', sans-serif;
  text-align: center;
  color: grey;
  /* top: 50%; */
  /* padding: 5px; */
`;

export const Break = styled.div`
  grid-area: break;
`
// container for rightdescription
export const RightDescription = styled.div`
  grid-area: righttext;
  /* font-size: 15px;
  font-family: 'Roboto+Mono', sans-serif;
  text-align: center;
  color: white;
  top: 50%;
  background: grey; */
`;
export const RightTitle = styled.div`
  font-size: 20px;
  font-family: 'Roboto+Mono', sans-serif;
  text-align: center;
  color: grey;
  /* top: 50%; */
  /* padding: 10px; */
`;

export const RightFeatures = styled.div`
  font-size: 15px;
  font-family: 'Roboto+Mono', sans-serif;
  text-align: center;
  color: grey;
  /* top: 50%; */
  /* padding: 5px; */
`;
