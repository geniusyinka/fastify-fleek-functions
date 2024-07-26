const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/hello', (req, res) => {
  res.json({ hello: 'world' });
});

// Export handler for serverless
module.exports.handler = (event, context) => {
  return new Promise((resolve, reject) => {
    app(event, context, (err, response) => {
      if (err) return reject(err);
      resolve(response);
    });
  });
};
