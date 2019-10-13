exports.seed = function(knex) {
  return knex("recipes").insert([
    { name: "Lasagna" },
    { name: "Flan" },
    { name: "Baked Ziti" },
    { name: "Pizza" }
  ]);
};
