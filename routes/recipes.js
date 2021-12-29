

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
    


    const recipeDetails = {
        details: {
          ingredients: recipeThatIwantIngredientsFor[0].ingredients,
          numSteps: recipeThatIwantIngredientsFor[0].instructions.length
        }
    }

    res.json(recipeDetails)
        
    console.log(recipeDetails)
});



router.post("/recipes", (req, res) => {
  const newRecipe = {
    name: req.body.name,
    ingredients:[],
    instructions:[]


  }

  


  console.log(newRecipe)

})

module.exports = router;
