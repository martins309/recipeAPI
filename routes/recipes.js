const { application } = require("express");
const express = require("express");
const { reverse } = require("../data");
const router = express.Router();

const  { Recipes }  = require("../data");
let recipeMap = Recipes.map((recipeName) => recipeName.name );

// let ingredientMap = Recipes.map((element) => {
//   return [
//     element.recipes[0].ingredients,
//     element.recipes[1].ingredients,
//     element.recipes[2].ingredients,
//   ];
// });


let ingredientMap1 = Recipes.map((element) => {
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
    const recipeThatIwantIngredientsFor = Recipes.filter(eachRecipe => eachRecipe.name === name)
        
    res.json(recipeThatIwantIngredientsFor.ingredrients)

 
  

  
  
  

  let results = [ingredientMap1, ingredientMap2, ingredientMap3]

  res.json(recipes);
});

module.exports = router;
