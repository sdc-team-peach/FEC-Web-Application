import React from 'react';

function Sizes({ sizes, inventory }) {
  console.log(sizes);
  return (
    <div>
      <p>{sizes}</p>
      <p>{inventory}</p>
    </div>
  );
}

export default Sizes;
