/* eslint-disable import/no-cycle */
import { Router } from 'express';
import customerRouter from './customer';
import orderRouter from './order';
import shoppingCartRouter from './shoppingCart';
import shippingRouter from './shipping';
import categoryRouter from './catergory';
import stripeRouter from './stripe';
import attributesRouter from './attributes';
import departmentsRouter from './departments';
import productsRouter from './products';
import taxsRouter from './taxs';

const app = Router();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to MARKETING API'
  });
});

app.use('/', stripeRouter);
app.use('/', customerRouter);
app.use('/orders', orderRouter);
app.use('/shoppingcart', shoppingCartRouter);
app.use('/shipping/regions', shippingRouter);
app.use('/', categoryRouter);
app.use('/', attributesRouter);
app.use('/', departmentsRouter);
app.use('/', productsRouter);
app.use('/', taxsRouter);

export default app;
