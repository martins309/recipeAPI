const express = require('express')
app = express();

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// this line isn't needed because express version 4.16 & up have it built in so use the middle ware instead
// bodyParser = require('body-parser'), <-- Delete this
// app.use( bodyParser.urlencoded ({extended: false}));
// app.use(bodyParser.json())

const port = process.env.PORT || 3333;

app.use('/', require('./routes/recipes'));

app.listen(port, () => {
    console.log(`The port is running on port ${port}`);
})``