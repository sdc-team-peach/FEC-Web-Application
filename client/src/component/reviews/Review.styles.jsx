import styled from 'styled-components';

export const Content = styled.section`
height: 100%;
width: 100%;
position: relative;
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

export const Container = styled.div`
margin: 5px 5px;
padding: 8px 10px;
background-color: #ededed;
background-position: center;
background-repeat: no-repeat;
height: 70px;
width: 800px;
`;

export const Title = styled.h2`
font-size: 15px;
font-weight: bold;
padding-top: 1rem;
`;

// @media only screen and (max-width:1600px) {
//     height: 85vh;
// }