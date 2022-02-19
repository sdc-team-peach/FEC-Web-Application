import styled from 'styled-components';

export const StarRate = styled.div`
margin: 15px;
padding; 10px;
text-align: left;
align-items: left;
width: 220px;
`;

export const BarContatiner = styled.div`
  progress[value] {
    width: ${(props) => props.width};
    appearance: none;

    ::-webkit-progress-bar {
      height: 10px;
      border-radius: 20px;
      background-color: #fff;
    }

    ::-webkit-progress-value {
      height: 10px;
      border-radius: 20px;
      background-color: ${(props) => props.color};
    }
  }
`;
