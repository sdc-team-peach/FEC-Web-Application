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
export default GlobalStyles;
