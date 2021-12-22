

const express = require('express')
const router = express.Router()

const[{recipes}] = require("../data");







router.get("/", (req, res) => {
  res.json(recipes);
  console.log('this is my recipes', recipes)
});

// router.get("/recipes", (req, res) => {
//     const 
//   const recipeObj = {
//     recipeNames: recipeMap
//   };
//   res.json(recipeObj);
// });

// router.get("/recipes/details/:name", (req, res) => {
//     const { name } = req.params;  
//     const recipeThatIwantIngredientsFor = recipes.filter(eachRecipe => eachRecipe.name === name)
        
//     res.json(recipeThatIwantIngredientsFor.ingredrients)

 
  

  
  
  

//   let results = [ingredientMap1, ingredientMap2, ingredientMap3]

//   res.json(recipes);
// });

module.exports = router;
