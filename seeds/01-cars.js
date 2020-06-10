
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin: "1255ETE477ET887ETR6",
          make: "Ford",
          modle: "Explorer",
          mileage: 85000,
          transmission: "Automatic",
          titleStatus: "Clean"
        },
        {
          vin: "5ETE477ET78987EG8TR6",
          make: "Tesla",
          modle: "Cyber Truck",
          mileage: 4700,
          transmission: "Automatic",
          titleStatus: "Clean"
        }
      ]);
    });
};
