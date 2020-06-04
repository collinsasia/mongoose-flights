var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET users listing. */
router.get('/', flightsCtrl.index);
//send user to new flights
router.get('/new', flightsCtrl.new);
// create a new flight post
router.post('/', flightsCtrl.create);
// show details of flight
router.get('/:id', flightsCtrl.show);

module.exports = router;
