import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 93%;
  height: 450px;
  background-color: #fff;
  // border-radius: 25px;
  z-index: 9;

`;

export const Container = styled.div`
  padding: 20px;
  position: relative;
  width: 100%;
  height: 90%;
  margin: auto;
  margin-top: 10px;
  overflow: hidden;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  gap: 10px;
`;

export const UsernameForm = styled.input`
  order: 1;
  height: 30px;
`;

export const EmailForm = styled.input`
  order: 2;
  height: 30px;
`;

export const FileForm = styled.input`
  order: 3;
`;

export const ReviewSummaryForm = styled.input`
  order: 4;
  height: 30px;
`;

export const ReviewInputForm = styled.input`
  order: 5;
  height: 80px;
`;

export const Title = styled.h2`
  height: 30px;
  margin: 15px;
`;

export const StarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 40px;
  font-align: center;
  font-size: 35px;
`;

export const RatingContainer = styled.div`
  display: flex;
  border-top: solid 0.3px;
  margin: auto;
  width: 50%;
  height: 50px;
  justify-content: center;
  font-size: 15px;
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
  width: 20%;
  transition: all .5s ease;
  margin: 0px 225px;
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

// .darkBG {
//   background-color: rgba(0, 0, 0, 0.2);
//   width: 100vw;
//   height: 100vh;
//   z-index: 0;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   position: absolute;
// }

// .centered {
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// }
