const db = require('../data/dbConfig.js');

module.exports = {
  get,
  getById
}

function get() {
  return db('sales');
}

function getById(id) {
  return db('sales').where({ id }).first();
}