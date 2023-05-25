const router = require('express').Router();

router.get('/maps', (req, res) => {
  res.status(200);
  res.json('hello world');
})