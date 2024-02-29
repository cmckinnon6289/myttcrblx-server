const mongoose = require('mongoose');

const runSchema = new mongoose.Schema({
    host: {
        type: Object,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    timing: {
        type: Date,
        required: true
    },
    runs: {
        type: Object,
        required: true
    },
    notes: {
        type: String,
        required: true
    }
})

const Run = mongoose.model('Run', runSchema);

module.exports = Run;