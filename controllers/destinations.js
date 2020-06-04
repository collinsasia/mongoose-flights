const Flight = require('../models/flight')

module.exports = {
  create,  
  update
};

function create(req,res) {
  Destination.create(req.body, function(err, destination) {
    res.redirect('/flight/show');
  });
}

function update(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      flight.destinations.push(req.body);
      flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`);
      });
    });
  }