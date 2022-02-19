import styled from 'styled-components';

// export const Background = styled.div`
// width: 100%;
// height: 100%;
// background-color: #A9A9A9;
// position: fixed;
// display: flex;
// justify-content: center;
// align-items: center;
// `;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 25%;
  bottom: 25%;
  left: 25%;
  right: 25%;
  /* width: 70%;
  height: 30vh; */
  background-color: #fff;
  border-radius: 25px;
  border: solid #e0e0e0 1px;
  margin: auto;
  z-index: 9;
`;

export const AddReviewContainer = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  margin: auto;
  margin-top: 25px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  gap: 20px;
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
export const ReviewInputForm = styled.input`
  order: 4;
  height: 150px;
`;

export const StarContainer = styled.div`
  font-size: 30px;
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
  order:4;

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
