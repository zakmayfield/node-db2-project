const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const carsRouter = require('../cars/cars-router.js');
const salesRouter = require('../car-sales/sales-router.js');
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/cars', carsRouter);
server.use('/api/sales', salesRouter);


server.get('/', (req, res) => {
  res.status(200).send('<h1>Server is running</h1>')
})

module.exports = server;