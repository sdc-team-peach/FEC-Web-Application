const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

const axios = require('axios');

app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})