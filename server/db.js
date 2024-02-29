const mongoose = require('mongoose');

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.tvm1j06.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=events`

mongoose.connect(connectionString, {}).then(() => console.log("Connected to database.")).catch((err) => console.log(err));

const enviro = require('dotenv');
enviro.config()