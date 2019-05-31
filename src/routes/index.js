/* eslint-disable import/no-cycle */
import { Router } from 'express';
import customerRouter from './customer';
import categoryRouter from './catergory';
import stripeRouter from './stripe';

const app = Router();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to MARKETING API'
  });
});

app.use('/', stripeRouter);
app.use('/', customerRouter);
app.use('/', categoryRouter);

export default app;
