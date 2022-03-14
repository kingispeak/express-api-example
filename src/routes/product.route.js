import express from 'express';
// import Book from '../models/product.model';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.json([]);
  } catch (err) {
    res.send(err);
  }
});

router.post('/', async (req, res) => {
  try {
    res.json([]);
  } catch (err) {
    res.send(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    res.json(req.params.id);
  } catch (err) {
    res.send(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    res.json(req.params.id);
  } catch (err) {
    res.send(err);
  }
});

export default router;
