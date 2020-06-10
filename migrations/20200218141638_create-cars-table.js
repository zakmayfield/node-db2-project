
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    //required
    tbl.string('vin', 128)
      .notNullable();
    tbl.string('make', 128)
      .notNullable();
    tbl.string('modle', 128)
      .notNullable();
    tbl.integer('mileage')
      .notNullable();
    
    //not required
    tbl.string('transmission', 128);
    tbl.string('titleStatus', 128);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
