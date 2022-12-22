'use strict';

const axios = require('axios');
require('dotenv').config();

const fetchAPIData = require('../lib/fetchApiData')
async function getFlight(req, res) {
    console.log('test flight routes');
    let { originLocationCode, destinationLocationCode, departureDate, adults } = req.query;
    let apiData = await fetchAPIData(originLocationCode, destinationLocationCode, departureDate, adults);
    console.log(apiData);
    res.send(apiData.data);
}




module.exports = getFlight;