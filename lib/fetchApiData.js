'use strict'
const axios = require('axios');
require('dotenv').config();

async function fetchAPIData(origin, destination, departure, adults) {
    let responseToken = await axios.post(TOKEN_URL);
    let token = responseToken.data.access_token;
 
    let FlightInfo = `${process.env.FLIGHT_URL}?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${departure}&adults=${adults}`
    let responseFlights = await axios.get(FlightInfo, {
        headers: {
            authorization: `Bearer ${token}`
        } 
    });

    let data = responseFlights.data;
   
    return data;
};


module.exports = fetchAPIData