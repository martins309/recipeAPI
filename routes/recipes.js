const router = require("express").Router()

/*
This Recipe API data looks like this:
[
  {
    recipes: [recipeData, recipeData, ...]
  }
]

which means inorder to git it you have to first refrence the data is RecipeApiData[0] 

Now... you can descructure from that.


const [{recipes}] = require("../data");
const { recipes } = RecipeApiData[0]


but this can be destructured using nested destructuring...
and now you have your recipes :)

also.. though good practice... semi-colons are no longer required in javascript 
*/

const [{recipes}] = require("../data")

console.log("This is my recipe data:", recipes)

module.exports = router;
