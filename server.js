"use strict";

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const Flight = require('./models/flight');
const axios = require('axios');
const verifyUser = require('./auth');
const { response } = require('express');

mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', _ => {
  console.log('We\'re connected, playa!');
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(authorize);

const PORT = process.env.PORT || 3002;

app.get('/flight', async (request, response) => {
    try {
        let queryObject = {}
        if (request.user.email) {
            queryObject.email = request.user.email;
        }
        let flights = await Flight.find()
        console.log(flights);
        response.send(flights);
    } catch(e) {
        console.log(e);
    }
});

app.post('/flight', async (request, response) => {
    console.log(request.body);
    try {
        let newFlight = await Flight.create(request.body);
        response.status(200).send(newFlight);
    } catch(e) {
        console.log(e);
    }
});

app.delete('/flight/:id', async (request, response) => {
    let id = request.params.id;
    try {
        let deleteFlight = await Flight.findByIdAndDelete(id);
        response.status(200).send('Flight has been removed.');
    } catch(e) {
        console.log(e);
    }
});

app.put('/flight/;id', async (request, response) => {
    let id = request.params.id;
    console.log('Updated value of id: ', id);
    request.body.status=true
    try {
        let updateFlight = await Flight.findByIdAndUpdate({ _id: id}, request.body);
        console.log(updateFlight);
        response.status(200).send(updateFlight);
    } catch(e) {
        console.log(e);
    }
});

async function fetchAPIData(origin, destination, departureDate) {
    let responseToken = await axios.post(TOKEN_URL);
    let token = responseToken.data.access_token;
    // https://test.api.amadeus.com/v1/security/oauth2/token
    // test token for test environment.

    let responseFlights = await axios.get(FLIGHT_URL);
    let data = responseFlights.data;
    // https://test.api.amadeus.com/v2/shopping/flight-offers
    // test flight url example.

    return data;
}

app.use('*', (request, response) => {
    response.status(500).send('Error, Not connected')
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));