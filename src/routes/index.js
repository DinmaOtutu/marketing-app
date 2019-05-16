import { Router } from 'express';

const app = Router();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to MARKETING API'
  });
});

export default app;
