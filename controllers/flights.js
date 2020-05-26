const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
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