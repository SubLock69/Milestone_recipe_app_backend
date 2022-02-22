/**
 * Handles all main endpoints
 */

const router = require('express').Router();
const db = require('../models');
const axios = require('axios');

//Retrieve recipes via spoonacular
router.get('/', (req, res) => {

});

//Retrieve general user info
router.get('/:uuid', async (req, res) => {
  
});