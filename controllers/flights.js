const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

function show(req, res) {
    Flight.findById(req.params.id) 
    .populate('flight').exec(function(err, flight) {
        res.render('flights/show', {
          title: 'Flight Destination', flight
        });
      });
  }

function create(req, res) {
    Flight.create(req.body, function() {
        res.redirect('/flights');
    });
}

function newFlight(req, res){
    res.render('flights/new');
}

function index(req,res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {flights});
    });
}