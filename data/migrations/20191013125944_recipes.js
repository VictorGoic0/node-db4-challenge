exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", table => {
      table.increments();
      table
        .string("name", 128)
        .notNullable()
        .unique();
    })
    .createTable("ingredients", table => {
      table.increments();
      table
        .string("name", 128)
        .notNullable()
        .unique();
    })
    .createTable("recipe-ingredients", table => {
      table.increments();
      table
        .integer("recipe_id")
        .references("recipes.id")
        .notNullable()
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .unsigned();
      table
        .integer("ingredient_id")
        .references("ingredients.id")
        .notNullable()
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .unsigned();
      table.float("quantity").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe-ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
