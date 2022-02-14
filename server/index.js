const express = require('express');
const axios = require('axios');

const app = express();
const config = require('../config');

const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/products', (req, res) => {
  const productId = req.query.id;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}`, {
    headers: {
      Authorization: config.API_KEY,
    },
  })
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((err) => {
      console.log('err : ', err);
      res.status(500).send(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
