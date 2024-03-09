const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

const Run = require('./models/Run');
const Trip = require('./models/Trip');

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})

require('./db');

app.get('/api/events/runs', async (req, res) => {
    try {
        const runs = await Run.find({});
        res.json(runs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

app.get('/api/events/runs/:id', async (req, res) => {
    try {
        const run = await Run.findOne({ runID: req.params.id });
        if (!run) {
            res.status(404).json({ error: `no run found with ID ${req.params.id}` });
        } else res.json(run);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

app.post('/api/events/runs', async (req, res) => {
    try {
        let run = req.body;
        let tripArr = [];
        run.trips.forEach((trip) => {
            let tripObj = new Trip(trip);
            tripArr.push(tripObj);
        });
        run.trips = tripArr;
        run = new Run(run);
        await run.save();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})