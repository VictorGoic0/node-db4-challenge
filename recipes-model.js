const db = require("./data/dbConfig.js");

module.exports = {
  getRecipes,
  getShoppingList
};

function getRecipes() {
  return db("recipes");
}

// Query the recipe-ingredients table
// Join with the ingredients table
// Where the recipe_id is the ID given to the function

function getShoppingList(recipe_id) {
  // should return a list of all ingredients and quantities for a given recipe
  return db("recipe-ingredients")
    .where({ recipe_id })
    .join("ingredients", "recipe-ingredients.ingredient_id", "ingredients.id");
}
