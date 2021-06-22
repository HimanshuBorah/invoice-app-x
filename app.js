const express = require('express');

const clientRouter = require('./routes/clientRoutes');
// const invoiceRouter = require('./routes/invoiceRoutes');

const morgan = require('morgan');

const app = express();

// Use Morgan for dev
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());


// Mounting routers
app.use('/api/v1/clients', clientRouter);
// app.use('/api/v1/users', invoiceRouter);

module.exports = app;
