const { application } = require("express");
const express = require("express");
const { reverse } = require("../data");
const router = express.Router();

const Recipes = require("../data");
const recipeMap = Recipes.map((element) => {
    return element.recipes
})

router.get("/", (req, res) => {
  res.send("The router seems to be working");
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
