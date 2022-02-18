import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px;
  grid-template-rows: 300px 100px;
  grid-template-areas: "image" "text";
  border-radius: 18px;
  background: #000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
`;

export const CardImage = styled.div`
  grid-area: image;
  background-image: url(${(props) => props.background});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

export const CardTextTitle = styled.h1`
  color: grey;
  font-size: 15px;
  font-weight: 300;
`;

export const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
`;

export const CardTextPrice = styled.p`
  color: red;
  font-size: 15px;
  font-weight: 300;
`;
