import styled from 'styled-components';
import { Container } from '../../GlobalStyle';

export const Picture = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.25rem;
  grid-auto-rows: 150px;
`;

export const ThumbnailImage = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: inline-block;
  position: relative;
  left: 13px;
  &:hover {
    cursor: pointer;
    border: 5px solid green;
  }
  &:active{
    border: 5px solid red;
}
`;

export const Text = styled.div`
  display: flex;

`;
