import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   width: 500px;
   height: 22px;
   justify-content: center;
   min-height: 5px;
   font-size: 22px;
`;

export const SubTitleBox = styled.div`
  width: 130px;
  display:flex;
  height: 15px;
  justify-content: left;
  margin-top: 10px;
`;

export const SubTitle = styled.h5`
  font-size: 15px;
  font-align: center;
`;

export const Label = styled.label`
   margin: 10px;
   width: 10px;
`;

export const Radio = styled.input`
   display: none;
`;
export const Rating = styled.div`
   cursor: pointer;
`;
