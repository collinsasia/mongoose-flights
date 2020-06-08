const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new mongoose.Schema ({
    seat:  {type: String, match: /[A-F][1-9]\d?/},
    price: Number,
    flight: String
})

module.exports = mongoose.model('Ticket', ticketSchema);