'use strict';

const axios = require('axios');
require('dotenv').config();

const fetchAPIData = require('../lib/fetchApiData')
async function getFlight(req, res) {
    let { originLocationCode, destinationLocationCode, departureDate, adults } = req.query;
    let apiData = await fetchAPIData(originLocationCode, destinationLocationCode, departureDate, adults)
    res.send(apiData)
}




module.exports = getFlight;