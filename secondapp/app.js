const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello , This is Second app!</h1>
  `);
});

app.listen(8080);
