/**
 * Handles all main endpoints
 */

const router = require('express').Router();
const db = require('../models');
// const axios = require('axios');

//Retrieve recipes via spoonacular
router.get('/', (req, res) => {
  res.send('hi'); //Unused route
});

router.post('/', async (req, res) => {
  let id = await db.User.create(req.body);
  res.json(id);
});

//Retrieve general user info
router.get('/:uuid', async (req, res) => {
  let user = await db.User.findById(req.params.uuid);
  res.json(user);
});

module.exports = router;