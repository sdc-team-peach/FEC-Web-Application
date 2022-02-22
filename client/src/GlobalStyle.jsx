import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text&family=Roboto+Mono:ital,wght@0,700;1,400&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 70%;
    }
}
body{
    font-family: 'Roboto+Mono', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    font-size: 1.6rem;
    background: #F9F9F9;
    color: #333;

}
.menu-container {
    position: relative;
    display: flex;
    float: left;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    flex: 0;
    margin-top:30px;
  }

  .menu-trigger {
    background: #ffffff;
    border-radius: 90px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    border: none;
    vertical-align: middle;
    transition: box-shadow 0.4s ease;
    margin-left: auto; /* Strictly for positioning */
  }

  .menu-trigger:hover {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  }

  .menu-trigger span {
    font-weight: 700;
    vertical-align: middle;
    font-size: 14px;
    margin: 0 10px;
  }

  .menu-trigger img {
    border-radius: 90px;
  }

  .menu {
    background: #ffffff;
    border-radius: 8px;
    position: absolute;
    top: 60px;
    right: 0;
    width: 300px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  }

  .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .menu li {
    border-bottom: 1px solid #dddddd;
  }

  .menu li div {
    text-decoration: none;
    color: #333333;
    padding: 15px 20px;
    display: block;
  }

  .menu:hover {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  }

  .img {
    width:100%;
    max-width:400px;
  }

  .carousel {
    overflow: hidden;
    width:100%;
    max-width:650px;
  }

  .inner {
    white-space: nowrap;
    transition: transform 0.3s;
  }

  .carousel-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    background-color: #cde306;
    color: white;
  }

  .indicators {
    display: flex;
    justify-content: center;
  }

  .indicators > button {
    margin: 5px;
  }

  .indicators > button.active {
    background-color: #cde306;
    color: black;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;
  different content type
  @media (max-width:400px){
  padding: 0 10px;
  }
  @media (max-width:991px) {
  padding: 0 30px;
  }

  @media (min-width: 1500px) {
  max-width: 1500px;
  }

  @media (min-width: 1800px) {
  max-width: 1800px;
  padding: 0 30px;
  }
`;

export const Button = styled.button`
border-radius: ${({ bigRadius }) => (bigRadius ? '30px' : '5px')};
background-color: ${({ primary }) => (primary ? '#cde306' : '#000')};
color: ${({ primary }) => (primary ? '#000' : '#fff')};
padding: ${({ big }) => (big ? '18px 30px' : '10px 28px')};
font-size: ${({ bigFont }) => (bigFont ? '20px' : '15px')};
outline: none;
cursor: pointer;
border: none;
transition: all .5s ease;
margin: 8px;

&:hover{
    background-color: ${({ primary }) => (primary ? '#fff' : '#cde306')};
    transform: translateY(-.5rem) scale(1.02);
    color: #000;
}
&:active{
    transform: translateY(.5rem);
}

`;

export const TextPrice = styled.p`
  color: black;
  font-size: 30px;
  font-weight: 1000;
  font-family: 'Roboto+Mono', sans-serif;
  text-align: left;
  position: absolute;


`;

export const TextSalesPriceOriginal = styled.p`
  color: black;
  text-decoration: line-through;
  font-size: 30px;
  font-weight: 1000;
  font-family: 'Roboto+Mono', sans-serif;
  text-align: left;
  position: absolute;

`;

export const TextSalesPrice = styled.span`
  color: red;
  font-size: 30px;
  font-weight: 1000;
  font-family: 'Roboto+Mono', sans-serif;
  text-align: left;
  position: absolute;
  margin-left: 100px;

`;

export default GlobalStyles;
