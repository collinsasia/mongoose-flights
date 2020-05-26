const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            //generate a dynamic date 
            let date = new Date();
            return date.setFullYear(date.getFullYear() + 1);
        }
    }

});

//creates the collection in mongoose flights db
module.exports = mongoose.model('Flight',  flightSchema);



