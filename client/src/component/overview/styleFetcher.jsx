import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../AppContext';

const styleFetcher = async () => {
  const myContext = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  const res = await axios.get('/products/styles', {
    params: {
      id: myContext.productId,
    },
  });
  return res.data.results;

  // useEffect(() => {
  //   fetchFunc();
  //   return () => setLoading(false);
  // }, []);
  // return currentPhoto;
// axios.get('/products/styles', {
//   params: {
//     id: productId,
//   },
// })
  // .then((res) => {
  //   console.log(res.data);
  //   setCurrentPhoto(res.data);
  // });
};

export default styleFetcher;
