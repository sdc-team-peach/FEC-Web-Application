import styled from 'styled-components';

export const CardWrapper = styled.div`
  height: 400px;
  width: 250px;
  display: grid;
  grid-template-columns: 250px;
  grid-template-rows: 300px 100px;
  grid-template-areas: "image" "text";
  /* border-radius: 18px; */
  background: white;

  text-align: center;
`;

export const CardImage = styled.div`
  grid-area: image;
  background-image: url(${(props) => props.background});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  /* margin: 25px; */
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: black;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
`;

export const CardTextTitle = styled.h1`
  color: white;
  font-size: 15px;
  font-weight: 1000;
  font-family: 'Roboto+Mono', sans-serif;
  text-align: left;
  position: absolute;
  left: 10px;
  top: 320px;
  line-height: 120%;
`;

export const CardTextBody = styled.p`
  width: 230px;
  color: grey;
  font-size: 13px;
  font-weight: 300;
  line-height: 80%;
  text-align: left;
  position: absolute;
  left: 10px;
  top: 340px;
`;

export const CardTextPrice = styled.p`
  color: white;
  font-size: 15px;
  font-weight: 1000;
  font-family: 'Roboto+Mono', sans-serif;
  text-align: left;
  position: absolute;
  left: 10px;
  bottom: 15px;

`;

export const CardTextSalesPriceOriginal = styled.p`
  color: white;
  text-decoration: line-through;
  font-size: 15px;
  font-weight: 1000;
  font-family: 'Roboto+Mono', sans-serif;
  text-align: left;
  position: absolute;
  left: 10px;
  bottom: 15px;
`;

export const CardTextSalesPrice = styled.span`
  color: red;
  font-size: 15px;
  font-weight: 1000;
  font-family: 'Roboto+Mono', sans-serif;
  text-align: left;
  position: absolute;
  left: 70px;
  bottom: 15px;
`;
