exports.seed = function(knex) {
  return knex("ingredients").insert([
    { name: "Tomatoes" },
    { name: "Sugar" },
    { name: "Flour" },
    { name: "Eggs" },
    { name: "Pepperoni" },
    { name: "Cheese" },
    { name: "Pasta" }
  ]);
};
