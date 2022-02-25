import styled from 'styled-components';

export const Picture = styled.div`
  display: grid;
  left: 15px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.25rem;
  grid-auto-rows: 175px;
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
  // left: 13px;
  margin-top:90px;
  &:hover {
    cursor: pointer;
    border-style:solid;
    border-color: #cde306;
  }
  &:active{
    border-style:solid;
    border-color: black;
}
`;

export const Text = styled.div`
  display: flex;
    font-family: 'Roboto+Mono', sans-serif;
    font-weight: 500;
    line-height: 1.6;
    font-size: 1.2rem;
    color: #333;
`;
