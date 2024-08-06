const express = require('express')
const router = express.Router()
const zomatoController =   require('./zomatro.controller');


// Create a new employee
router.post('/', zomatoController.create);
router.post('/login' , zomatoController.login);
module.exports = router