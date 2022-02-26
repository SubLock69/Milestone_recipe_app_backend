require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;

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

app.get('*', (req, res) => {res.status(404)});

//Listen
app.listen(port, () => console.log(`Port ${port} has risen...`));