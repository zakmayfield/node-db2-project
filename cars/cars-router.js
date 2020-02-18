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

module.exports = router;