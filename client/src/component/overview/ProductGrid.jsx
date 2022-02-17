import styled from 'styled-components';
import { Container } from '../../GlobalStyle';

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0.25rem;
  color: red;
  grid-template-areas:
    "main sidebar"
    "main sidebar"

  // height: 100vh;
  // color: red;

  // grid-template-rows: 1fr 0.5fr 0.5fr;
  // grid-template-areas:
  //     "main main main sidebar"
  //     "main main main sidebar"
  //     "main main main sidebar"
  // text-align: center;
  // grid-gap: 0.25rem;

`;

export const Main = styled.main`
  background: #1f2128;
  color: white;
  grid-area: main;
  padding: 0.25rem;
`;

export const SideBar = styled.div`
  background: #1f2128;
  color: white;
  grid-area: sidebar;
  padding: 0.25rem;
`;

