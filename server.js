const express = require("express");
const app = express();

const connection = require("./config/connection");
const port = 3000;
require("express-handlebars");



app.listen(port, () => console.log(`Listening on Port ${port}`));