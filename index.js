const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

// Export the app for testing
module.exports = app;

// Only start server if not in test environment
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}