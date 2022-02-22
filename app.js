require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const port = process.env.PORT || 4000;

//DB connection
//Stays open for other mongoose scripts to access during runtime
db(); //Async due to connection taking time

//Middleware
app.use(express.json());
app.use(cors());

//Routes
const [
  rootRoute
] = [
  require('./routes/index')
]; //Setup to have more routes added

app.use('/', rootRoute);

//Listen
app.listen(port, () => console.log(`Port ${port} has risen...`));