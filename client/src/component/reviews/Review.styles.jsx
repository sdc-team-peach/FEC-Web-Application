import styled from 'styled-components';
import { MdThumbUpAlt } from 'react-icons/md';

export const Container = styled.div`
margin: auto;
width: 1200px;
`;

export const WidgetTitle = styled.h1`
font-size: 45px;
font-weight: bold;
margin: 10px 0px;
padding-top: 1rem;
padding-left: 10px;
`;

export const RelatedContainer = styled.div`
margin: auto;
padding: 50px;
width: 1200px;
`;

export const Content = styled.section`
height: 50px;
width: 100%;
margin: 20px 0px;
padding: 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: left;
text-align: left;
color: #000000;
font-size: 14px;
font-weight: thin;
font-family: Helvetica;
`;

export const ReviewListContainer = styled.div`
margin: 15px;
flex-shrink: 0;
object-fit: cover;
// flex-grow: 1;
padding; 10px;
text-align: left;
align-items: left;
width: 700px;
float: left;
`;

export const RatingBreakdownContainer = styled.div`
margin-right: 45px;
text-align: left;
align-items: left;
float: left;
height: 800px;
width: 320px;
background-color: #fff;
`;

export const ReviewContainer = styled.div`
margin: 15px;
padding: 8px 10px;
border-bottom: solid 0.5px;
background-position: center;
background-repeat: no-repeat;
text-align: left;
align-items: left;
height: 210px;
width: 650px;
`;

export const ReviewTitle = styled.h1`
font-size: 20px;
font-weight: bold;
margin: 10px;
float: left;
`;

export const Title = styled.h2`
font-size: 20px;
font-family: 'Roboto', sans-serif;
font-weight: 500;
margin: 10px 0px;
padding-top: 1rem;
`;

export const Subtext = styled.p`
font-size: 16px;
font-family: 'Roboto', sans-serif;
font-weight: 300;
padding-top: 2rem;
display: flex;
text-align: right;
align-items: center;
justify-content: flex-end;
`;

export const SelectContainer = styled.div`
// margin: 10px;
margin-top: 30px;
padding: 8px 10px;
width: 500px;
float: left;
`;

export const Thumb = styled(MdThumbUpAlt)`
  background-color:  '#000';
  font-size: 25px;

  outline: none;
  cursor: pointer;
  border: none;
  transition: all .2s ease;
  order:6;
  &:hover{
      transform: translateY(-.5rem) scale(1.02);
      color: #0000FF;
  }
  &:active{
      transform: translateY(.5rem);
  }
`;

// @media only screen and (max-width:1600px) {
//     height: 85vh;
// }
