const express = require('express');

const app = express();




// Mounting routers
app.use('/', (req, res) => {
  res.send('mY APP')
});


module.exports = app;
