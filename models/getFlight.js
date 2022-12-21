'use strict';

const axios = require('axios');
require('dotenv').config();

async function getFlight(req, res) {
    let { originLocationCode, destinationLocationCode, departureDate, adults } = req.query;
    let url = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${originLocationCode}&destinationLocationCode=${destinationLocationCode}&departureDate=${departureDate}&adults=${adults}`;
}









module.exports = getFlight;