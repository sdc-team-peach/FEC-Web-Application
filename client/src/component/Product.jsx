import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInformation: {},
      relatedProducts: [],
      reviews: [],
      size: '',
      color: '',
      style: {},
    };
  }
}

export default Product;
