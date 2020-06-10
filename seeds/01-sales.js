
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').del()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        {
          name: "Homer Simpson",
          email: "homersimp@springdale.com",
          purchaseAmount: 18500,
          purchaseDate: "02-13-2020"
        },
        {
          name: "Fox Mulder",
          email: "iwant2believe@gmail.com",
          purchaseAmount: 26750,
          purchaseDate: "01-05-2020"
        }
      ]);
    });
};
