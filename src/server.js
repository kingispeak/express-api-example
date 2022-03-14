import express from 'express';
import config from './config';
import productRouter from './routes/product.route';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('server is Running');
});

app.use('/products', productRouter);

app.listen(config.port, () => {
  console.log(`Listening at http://localhost:${config.port}`);
});
