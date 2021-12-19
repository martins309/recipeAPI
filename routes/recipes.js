const { application } = require("express");
const express = require("express");
const { reverse } = require("../data");
const router = express.Router();

const Recipes = require("../data");
let recipeMap = Recipes.map((element) => {
  return [
    element.recipes[0].name,
    element.recipes[1].name,
    element.recipes[2].name,
  ];
});

let ingredientMap = Recipes.map((element) => {
  return [
    element.recipes[0].ingredients,
    element.recipes[1].ingredients,
    element.recipes[2].ingredients,
  ];
});

let IngredientMap1 = Recipes.map((element) => {
  return [
    element.recipes[0].ingredients[0],
    element.recipes[1].ingredients[1],
    element.recipes[1].ingredients[2],
  ];
});

let ingredientMap2 = Recipes.map((element) => {
  return [
    element.recipes[1].ingredients[0],
    element.recipes[1].ingredients[1],
    element.recipes[1].ingredients[2],
    element.recipes[1].ingredients[3],
  ];
});

let ingredientMap3 = Recipes.map((element) => {
  return [
    element.recipes[2].ingredients[0],
    element.recipes[2].ingredients[1],
    element.recipes[2].ingredients[2],
    element.recipes[2].ingredients[3],
  ];
});

router.get("/", (req, res) => {
  res.json(Recipes);
});

router.get("/recipes", (req, res) => {
  const recipeObj = {
    recipeNames: recipeMap,
  };
  res.json(recipeObj);
});

router.get("/recipes/details/:name", (req, res) => {
  const { name } = req.params;
  const recipes = Recipes.map(() => {
      return  name
  });

  res.json(recipes);
});

module.exports = router;
