

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

      if(name === recipeThatIwantIngredientsFor) {
        res.json(recipeDetails)
      }else {
        return {}
      }

   
 
});



router.post("/recipes", (req, res) => {
    
  const newRecipe = {
    name: req.body.name,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions
  }

  if(req.body.name){
    res.send("it already exists")
  }else {
    res.send(newRecipe)
  }

  recipes.push(newRecipe)

  console.log(recipes)
  
})

module.exports = router;
