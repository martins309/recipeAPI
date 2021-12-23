

const express = require('express')
const router = express.Router()

const[{recipes}] = require("../data");




router.get("/", (req, res) => {
  res.json(recipes);
  console.log('this is my recipes', recipes)
});

router.get("/recipes", (req, res) => {
    
  const recipeObj = {
    recipeNames: [recipes[0].name, recipes[1].name, recipes[2].name]
  };
  res.json(recipeObj);
});

router.get("/recipes/details/:name", (req, res) => {
    const { name } = req.params;  
    const recipeThatIwantIngredientsFor = recipes.filter(eachRecipe => eachRecipe.name.toLowerCase() === name.toLowerCase())
    name ? recipeThatIwantIngredientsFor[0].ingredients : null

    const recipeDetails = {
        details: {
          ingredients: recipeThatIwantIngredientsFor[0].ingredients
        }
    }

    res.json(recipeDetails)
        
    console.log(recipeDetails)
});

module.exports = router;
