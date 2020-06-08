const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    addToFlight
}

function addToFlight(req,res) {
    Flight.findById(req.params.id, function(err, flight) {
         flight.destinations.push(req.body);
         flight.save(function(err) {
           res.redirect(`/flights/${flight._id}`);
         });
       });
   }

function show(req, res) {
    Flight.findById(req.params.id)
     .populate('tickets')
        .exec(function(err,flight) {
            Ticket.find({_id: {$nin: flight.tickets}}, function(err, tickets) {
                res.render('flights/show', {
                    title: 'Flight Destination',
                    flight,
                    tickets
            });
          });
        });
}

function create(req, res) {
    Flight.create(req.body, function() {
        res.redirect(`/flights/${flight._id}`);
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