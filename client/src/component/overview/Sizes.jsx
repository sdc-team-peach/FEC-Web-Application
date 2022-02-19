import React from 'react';
import { SizeContainer, Text } from './Sizes.Styles';

function Sizes({ sizes, inventory }) {
  return (
    <SizeContainer>
      <Text>{sizes}</Text>
      <Text>{inventory}</Text>
    </SizeContainer>
  );
}

export default Sizes;
