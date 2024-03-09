const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    route: {
        type: String,
        required: true
    },
    dest1: {
        type: String,
        required: true
    },
    dest2: {
        type: String,
        required: true
    },
    layover: {
        type: Number,
        required: true
    },
    quantity: Number,
    notes: String
})

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;