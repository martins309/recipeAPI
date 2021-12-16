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


let  ingredientMap = Recipes.map((element) => {
    return [
      element.recipes[0].ingredients,
      element.recipes[1].ingredients,
      element.recipes[2].ingredients,
    ];
  });
  
;

let IngredientMap = Recipes.map((element) => {
    let ingredients1 = [element.recipes[0].ingredients[0], element.recipes[0].ingredients[1], element.recipes[0].ingredients[2]]
    let ing
    return[ingredients1]
})


router.get("/", (req, res) => {
  res.json(Recipes);
});

router.get("/recipes", (req, res) => {
  const recipeObj = {
    recipeNames: recipeMap,
  };
  res.json(recipeObj);
});



router.get("/recipes/details", (req, res) => {
   
   
   
    

    res.json(IngredientMap)
  
});

module.exports = router;
