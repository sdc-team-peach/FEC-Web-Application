import React from 'react';
import { BarContainer, ValueContainer } from './Breakdown.styles';

function RatingBars({
 name, value, max,
}) {
  return (
    <>
      <ValueContainer>
        {name}
        {' '}
        {Number(value).toFixed(2)}
      </ValueContainer>
      <BarContainer>
        <progress value={Number(value)} max={max} />
      </BarContainer>
    </>
  );
}

export default RatingBars;
