const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    addToFlight
}

function addToFlight(req,res) {
    Flight.findById(req.params.id, function(err, flight) {
         flight.destinations.push(req.body.flightId);
         flight.save(function(err) {
           res.redirect(`/flights/${flight._id}`);
         });
       });
   }

function show(req, res) {
    Flight.findById(req.params.id, function(err,flight) {
        res.render('flights/show', {
            title: 'Flight Destination', flight
          });
    })
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