const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    new: newTicket,
    create,
    show,
    addToFlight
}

function addToFlight(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      flight.tickets.push(req.body.ticketId);
      flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`);
      });
    });
  }

  function show(req, res) {
    Ticket.find(req.params.id, function(err,tickets) {
        res.render('/tickets', {
            title: 'Tickets', tickets
          });
    })
}

function create(req, res) {
  Ticket.create(req.body, function(err, ticket) {
    res.redirect('/tickets/new');
  });
}

function newTicket(req, res) {
    Ticket.find({}, function(err, tickets) {
      res.render('tickets/new', {
        title: 'Add Ticket',
        tickets
      });
    })
  };
