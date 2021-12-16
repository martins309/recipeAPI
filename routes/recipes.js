const { application } = require("express");
const express = require("express");
const { reverse } = require("../data");
const router = express.Router();

const Recipes = require("../data");
const recipeMap = Recipes.map((element) => {
     
    return [element.recipes[0].name, element.recipes[1].name, element.recipes[2].name]
})

router.get("/", (req, res) => {
  res.json(Recipes);
});

router.get("/recipes", (req, res) => {
//    const recipeNames = Recipes;
    const recipeObj = {
        recipeNames: recipeMap
    }
   res.json(recipeObj);

});

router.get('/recipes/details/:name'), (req, res) => {
    
}
module.exports = router;
