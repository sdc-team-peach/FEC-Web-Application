import React from 'react';

function Sizes({ sizes, inventory }) {
  return (
    <div>
      <p>{sizes}</p>
      <p>{inventory}</p>
    </div>
  );
}

export default Sizes;
