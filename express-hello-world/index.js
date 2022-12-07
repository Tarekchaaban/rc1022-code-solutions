const express = require('express');
const app = express();

app.use(function (req, res) {
  res.send('<p>Hello World!</p>');
});

app.listen(3000, () => {
});
