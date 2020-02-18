const express = require('express');
const Sales = require('./salesDb');
const router = express.Router();

router.get('/', (req, res) => {
  Sales.get()
    .then(sales => {
      res.status(200).json(sales);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({error: "Could not retrieve sales"});
    })
})

router.get('/:id', (req, res) => {
  Sales.getById(req.params.id)
    .then(sale => {
      res.status(200).json(sale)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({error: "Could not retrieve sales"});
    })
})

module.exports = router;