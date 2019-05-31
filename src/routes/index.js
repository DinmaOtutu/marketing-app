/* eslint-disable import/no-cycle */
import { Router } from 'express';
import customerRouter from './customer';
import orderRouter from './order';
import shoppingCartRoute from './shoppingCart';
import shippingRoute from './shipping';

const app = Router();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to MARKETING API'
  });
});

app.use('/', customerRouter);
app.use('/orders', orderRouter);
app.use('/shoppingcart', shoppingCartRoute);
app.use('/shipping/regions', shippingRoute);

export default app;
