const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

const port = process.env.PORT || 3333;

app.use( bodyParser.urlencoded ({extended: false}));
app.use(bodyParser.json())

app.use('/', require('./routes/recipes'));

app.listen(port, () => {
    console.log(`The port is running on port ${port}`);

})