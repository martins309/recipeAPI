const express = require("express");
app = express();

const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/recipes"));

app.listen(port, () => {
  console.log(`The port is running on port ${port}`);
});
