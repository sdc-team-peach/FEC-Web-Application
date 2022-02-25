const express = require('express');
const axios = require('axios');

const app = express();
const config = require('../config');

const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/products', (req, res) => {
  const productID = req.query.id;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productID}`, {
    headers: {
      Authorization: config.API_KEY,
    },
  })
    .then((result) => {
      // console.log(‘DATA’, result.data);
      res.send(result.data);
    })
    .catch((err) => {
      // console.log(‘ERROR HERE’, err);
      res.status(500).send(err);
    });
});
app.get('/products/styles', (req, res) => {
  const productID = req.query.id;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productID}/styles`, {
    headers: {
      Authorization: config.API_KEY,
    },
  })
    .then((result) => {
      // console.log(‘DATA’, result.data);
      res.send(result.data);
    })
    .catch((err) => {
      // console.log(‘ERROR HERE’, err);
      res.status(500).send(err);
    });
});

app.get('/products/review', (req, res) => {
  const productId = req.query.id;
  const productSort = req.query.sort;
  const productCount = req.query.count;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?count=${productCount}&sort=${productSort}&product_id=${productId}`, {
    headers: {
      Authorization: config.API_KEY,
    },
  })
    .then((result) => res.status(200).send(result.data))
    .catch((err) => res.status(500).send(err));
});

app.get('/products/review/meta', (req, res) => {
  const productId = req.query.id;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${productId}`, {
    headers: {
      Authorization: config.API_KEY,
    },
  })
    .then((result) => res.status(200).send(result.data))
    .catch((err) => res.status(500).send(err));
});

app.get('/products/related/styles', (req, res) => {
  const productId = req.query.id;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/related`, {
    headers: {
      Authorization: config.API_KEY,
    },
  })
    .catch((err) => {
      // console.log('err getting releated products id arr', err);
      res.status(500).send(err);
    })
    .then((resultArr) => {
      // console.log('this is the arr', resultArr);
      const requests = resultArr.data.map((relatedProductId) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${relatedProductId}/styles`, {
        headers: {
          Authorization: config.API_KEY,
        },
      }));
      axios.all(requests).then(axios.spread((...responses) => {
        // console.log(responses.data);
        const responseData = responses.map((response) => response.data);
        // console.log(responseData)
        res.send(responseData);
      })).catch((errors) => {
        res.status(500).send(errors);
      });
    });
});
app.get('/products/related', (req, res) => {
  const productId = req.query.id;
  console.log(productId);
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/related`, {
    headers: {
      Authorization: config.API_KEY,
    },
  })
    .catch((err) => {
      // console.log('err getting releated products id arr', err);
      res.status(500).send(err);
    })
    .then((resultArr) => {
      // console.log('this is the arr 2', resultArr);
      const requests = resultArr.data.map((relatedProductId) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${relatedProductId}`, {
        headers: {
          Authorization: config.API_KEY,
        },
      }));
      axios.all(requests).then(axios.spread((...responses) => {
        // console.log(responses.data);
        const responseData = responses.map((response) => response.data);
        // console.log(responseData)
        res.send(responseData);
      })).catch((errors) => {
        res.status(500).send(errors);
      });
    });
});
app.get('/cart', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart', {
    headers: {
      Authorization: config.API_KEY,
    },
  })
    .catch((err) => {
      res.status(500).send(err);
    })
    .then((response) => {
      res.send(response.data);
    });
});
app.post('/cart', (req, res) => {
  // param is {sku_id: <somenumber>}
  const param = req.query;
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart', param, {
    headers: {
      Authorization: config.API_KEY,
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.post('/reviews', (req, res) => {
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews', req.body, {
    headers: {
      Authorization: config.API_KEY,
    },
  })
    .then((result) => {
      res.status(201).send();
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.put('/reviews/:review_id', (req, res) => {
  const { review_id } = req.params;
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${review_id}/helpful`, null, {
    headers: {
      Authorization: config.API_KEY,
    },
  })
    .then((result) => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
