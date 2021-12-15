const { application } = require('express');
const express = require('express');
const { reverse } = require('../data');
const router = express.Router();




const recipes = require('../data');

router.get('/', (req, res) => {
    res.send('The router seems to be working');

})

router.get('/recipes', (req, res) => {
    const names = {
        recipeNames: recipes
   }
   res.json(names);
   
})











module.exports = router;