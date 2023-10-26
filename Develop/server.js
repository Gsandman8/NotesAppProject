const express = require('express');
const app = express();
const routes = require('./routes');

const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use(routes);



app.listen(PORT, () => {
    console.log(`API server now on port https://localhost:${PORT} !`);
  });