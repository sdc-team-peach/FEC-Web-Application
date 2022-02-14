const express = require('express');
const axios = require('axios');

const app = express();
const config = require('../config');

const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/products', (req, res) => {
//   const productId = req.query.id;
//   let productData = {};
//   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}`, {
//     headers: {
//       Authorization: config.API_KEY,
//     },
//   })
//     .then((result) => {
//       productData.productInfo = result.data;
//     })
//     .catch((err) => {
//       console.log('err : ', err);
//       res.status(500).send(err);
//     })
//     .then(() => {
//       axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/styles`, {
//         headers: {
//           Authorization: config.API_KEY,
//         },
//     })
//     .then((result) => {
//       productData.productStyle = result.data
//     })
//     .catch((err) => {
//       console.log('err : ', err);
//       res.status(500).send(err);
//     })
//     .then(() => {
//       res.send(productData);
//     })
//     .catch((err) => {
//       console.log('err : ', err);
//       res.status(500).send(err);
//     })
// });

// app.get('/products/review', (req, res) => {
//   const productId = req.query.id;
//   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/reviews/`, {
//     headers: {
//       Authorization: config.API_KEY,
//     },
//   })
//     .then((result) => res.status(200).then);
// });

// app.get('/products/related', (req, res) => {
//   const productId = req.query.id;
//   console.log(productId);
//   let relatedProductStyles = [];
//   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/related`, {
//     headers: {
//       Authorization: config.API_KEY,
//     },
//   })
//     .catch((err) => {
//       console.log('err getting releated products id arr', err);
//     })
//     .then((resultArr) => {
//       resultArr.data.forEach((relatedProductId) => {
//         axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${relatedProductId}/styles`, {
//           headers: {
//             Authorization: config.API_KEY,
//           },
//         })
//           .catch((err) => {
//             console.log('err getting style', err);
//           })
//           .then((result) => {
//             relatedProductStyles.push(result.data);
//           });
//       });
//     })

//     .then(() => {
//       res.send(relatedProductStyles);
//     });
// });

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
