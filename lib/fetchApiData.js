'use strict'
const axios = require('axios');
const queryString = require('querystring');
require('dotenv').config();

async function fetchAPIData(origin, destination, departure, adults) {
    let tokenResponse = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', queryString.stringify({
        grant_type: 'client_credentials',
        client_id: process.env.client_id,
        client_secret: process.env.client_secret
    }))
    let token = tokenResponse.data.access_token;
    let FlightInfo = `${process.env.FLIGHT_URL}?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${departure}&adults=${adults}`
    let responseFlights = await axios.get(FlightInfo, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    let data = responseFlights.data;

    return data;

};

module.exports = fetchAPIData;