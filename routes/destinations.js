var express = require('express');
var router = express.Router();
var destinationsCtrl = require('../controllers/destinations');

//create the destination
router.post('/flights/:id', destinationsCtrl.update);
//update a flight with destination/add destination to flight
router.put('/flights/:id', destinationsCtrl.create);

module.exports = router;