const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})

require('./db');

const Run = require('./models/Run');