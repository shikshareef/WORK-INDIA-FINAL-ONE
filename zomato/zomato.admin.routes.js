const express = require('express');
const router = express.Router();
const venueController = require('./zomato.admin.controllers');

// Create a new venue
router.post('/', venueController.create);

module.exports = router;
