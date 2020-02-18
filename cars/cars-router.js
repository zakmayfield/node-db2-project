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

router.put('/:id', (req, res) => {
  Cars.update(req.params.id, req.body)
    .then(updatedCount => {
      res.status(201).json(updatedCount);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "Could not update car" })
    })
})

router.delete('/:id', (req, res) => {
  Cars.remove(req.params.id)
    .then(removedCount => {
      res.status(201).json(removedCount);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "Could not remove the car" })
    })
})

module.exports = router;