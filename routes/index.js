/**
 * Handles all main endpoints
 */

const router = require('express').Router();
const db = require('../models');
const axios = require('axios');

//Retrieve recipes via spoonacular
router.get('/', (req, res) => {
  res.send('hi');
});

router.post('/', async (req, res) => {
  let id = await db.User.create(req.body);
  res.json(id);
});

//Retrieve general user info
router.get('/:uuid', async (req, res) => {
  let user = await db.User.findById(req.params.uuid);
  console.log(user);
  res.json(user);
});

module.exports = router;