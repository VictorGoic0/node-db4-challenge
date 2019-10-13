const express = require("express");
const server = express();
const db = require("./recipes-model.js");

server.use(express.json());

server.get("/api/recipes", async (req, res) => {
  try {
    const recipes = await db.getRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

server.get("/api/recipes/:id/ingredients", async (req, res) => {
  const { id } = req.params;
  try {
    const shoppingList = await db.getShoppingList(id);
    res.status(200).json(shoppingList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = server;
