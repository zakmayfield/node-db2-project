const express = require('express');
const Cars = require('./carsDb');
const router = express.Router();

router.get('/', (req, res) => {
  Cars.get()
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "Could not retieve cars" })
    })
})

router.get('/:id', (req, res) => {
  Cars.getById(req.params.id)
    .then(car => {
      res.status(200).json(car);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "Could not retieve that car" })
    })
})

router.post('/', (req, res) => {
  Cars.insert(req.body)
  .then(car => {
    res.status(201).json(car);
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ error: "Could not add car" })
  })
})

module.exports = router;