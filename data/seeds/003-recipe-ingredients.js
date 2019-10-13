exports.seed = function(knex) {
  return knex("recipe-ingredients").insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 2.0 },
    { recipe_id: 1, ingredient_id: 5, quantity: 1.5 },
    { recipe_id: 1, ingredient_id: 6, quantity: 0.5 },
    { recipe_id: 4, ingredient_id: 3, quantity: 3.2 },
    { recipe_id: 2, ingredient_id: 4, quantity: 4.2 },
    { recipe_id: 4, ingredient_id: 1, quantity: 5.7 },
    { recipe_id: 4, ingredient_id: 6, quantity: 1.7 },
    { recipe_id: 3, ingredient_id: 7, quantity: 3.8 },
    { recipe_id: 3, ingredient_id: 6, quantity: 1.0 },
    { recipe_id: 3, ingredient_id: 1, quantity: 0.9 }
  ]);
};
