const mongoose = require('mongoose');

const runSchema = new mongoose.Schema({
    runID: {
        type: Number,
        required: true
    },
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
    trips: {
        type: Object,
        required: true
    },
    notes: {
        type: String,
        required: true
    }
}, { collection: 'runs' })

const Run = mongoose.model('Run', runSchema);

module.exports = Run;