import styled from 'styled-components';
import { Container } from '../../GlobalStyle';

export const Picture = styled(Container)`
  display: block;
  text-align: justify;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  height: 100%;
  width: 50%;
  ${Container}
`;
export const ThumbnailImage = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

export const Text = styled.div`
  display: block
`;
