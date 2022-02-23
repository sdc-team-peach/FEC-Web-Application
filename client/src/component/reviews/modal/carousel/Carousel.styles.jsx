import styled from 'styled-components';

export const Container = styled.div`{
  position: fixed;
  width: 600px;
  height: 500px;
  top: 25%;
  bottom: 25%;
  left: 30%;
  right: 30%;
  display: flex;
  background-color: #fff;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  z-index: 9999;
  justify-content: center;
}`;

export const DarkBG = styled.div`
background-color: rgba(0, 0, 0, 0.2);
width: 100vw;
height: 100vh;
z-index: 9998;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
position: fixed;
`;

export const Wrapper = styled.div`{
  width: 100%;
  height: 500px;
  position: relative;
}`;

export const ContentWrapper = styled.div`{
  overflow: hidden;
  width: 100%;
  height: 100%;
}`;

export const Content = styled.div`{
  display: inline-flex;
  width: 200%;
  transition: all 250ms linear;
}`;

export const ButtonWrapper = styled.div`{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0px 160px;
}`;

export const Next = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? '30px' : '5px')};
  background-color: ${({ primary }) => (primary ? 'transparent' : '#000')};
  color: ${({ primary }) => (primary ? '#000' : '#fff')};
  padding: ${({ big }) => (big ? '18px 30px' : '10px 28px')};
  font-size: ${({ bigFont }) => (bigFont ? '20px' : '15px')};
  outline: none;
  cursor: pointer;
  border: none;
  transition: all .5s ease;
  order:6;
  width: 50%;
  &:hover{
      background-color: ${({ primary }) => (primary ? '#fff' : '#cde306')};
      transform: translateY(-.5rem) scale(1.02);
      color: #000;
  }
  &:active{
      transform: translateY(.5rem);
  }
`;

export const Prev = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? '30px' : '5px')};
  background-color: ${({ primary }) => (primary ? '#cde306' : '#000')};
  color: ${({ primary }) => (primary ? '#000' : '#fff')};
  padding: ${({ big }) => (big ? '18px 30px' : '10px 28px')};
  font-size: ${({ bigFont }) => (bigFont ? '20px' : '15px')};
  outline: none;
  cursor: pointer;
  border: none;
  transition: all .5s ease;
  margin: auto;
  order:6;

  &:hover{
      background-color: ${({ primary }) => (primary ? '#fff' : '#cde306')};
      transform: translateY(-.5rem) scale(1.02);
      color: #000;
  }
  &:active{
      transform: translateY(.5rem);
  }
`;
