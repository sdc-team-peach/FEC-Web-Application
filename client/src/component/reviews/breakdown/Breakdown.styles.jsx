import styled from 'styled-components';

export const StarRate = styled.div`
margin: 15px;
padding; 10px;
text-align: left;
align-items: left;
width: 220px;
`;

export const BarContainer = styled.div`
  progress[value] {
    width: 100px;
    margin-left: 20px;
    appearance: none;

    ::-webkit-progress-bar {
      height: 7px;
      background-color: #e0e0e0;
    }

    ::-webkit-progress-value {
      height: 7px;
      background-color: #000000;
    }
  }
`;

export const ValueContainer = styled.span`
margin: 15px;
text-align: left;
align-items: left;
width: 30px;
`;
