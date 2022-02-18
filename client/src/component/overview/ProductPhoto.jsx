// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import AppContext from '../AppContext';
// import dataFetcher from '../../dataFetcher';

// function photoFetcher(productId) {
//   const [currentPhoto, setCurrentPhoto] = useState();
//   axios.get('/products/styles', {
//     params: {
//       id: productId,
//     },
//   })
//     .then((res) => {
//       console.log(res.data);
//       setCurrentPhoto(res.data);
//     });
// }

// function ProductPhoto() {
//   const myContext = useContext(AppContext);
//   return (
//     <h1>
//       Hello World
//     </h1>
//   );
// }

// export default ProductPhoto;
