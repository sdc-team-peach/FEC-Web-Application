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
  // border-radius: 25px;
  z-index: 9997;
  justify-content: center;
}`;

export const DarkBG = styled.div`
background-color: rgba(0, 0, 0, 0.2);
width: 100vw;
height: 100vh;
z-index: 9996;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
position: fixed;
`;

export const ContentWrapper = styled.div`{
  overflow: hidden;
  margin: auto;
  width: 80%;
  height: 90%;
}`;

export const Content = styled.div`{
  display: inline-flex;
  transition: all 250ms linear;
}`;

export const LeftArrow = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: white;
  border: 1px solid #ddd;
  left: 24px;
`;

export const RightArrow = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: white;
  border: 1px solid #ddd;
  right: 24px;
`;