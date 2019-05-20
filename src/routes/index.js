/* eslint-disable import/no-cycle */
import { Router } from 'express';
import customerRouter from './customer';

const app = Router();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to MARKETING API'
  });
});

app.use('/', customerRouter);

export default app;
