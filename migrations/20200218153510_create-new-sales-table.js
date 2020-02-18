
exports.up = function (knex) {
  return knex.schema.createTable('sales', tbl => {
    tbl.increments();
    tbl.string('name')
      .notNullable()
      .index();
    tbl.string('email')
      .notNullable();
    tbl.string('purchaseAmount')
      .notNullable();
    tbl.string('purchaseDate')
      .notNullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('sales');
};
