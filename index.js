const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

const server = app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports = server; // Export the server for testing
