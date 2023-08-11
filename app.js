const express = require('express');
const morgan = require('morgan');

const app = express();

//1) MIDDLEWARES
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('hello from the middleware 👉👈');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//2) HANDLERS or CONTROLLERS of each route

//3) ROUTES
const tourRouter = require('./Routes/tourRouter');
const userRouter = require('./Routes/userRouter');

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;

//4)START SERVER
