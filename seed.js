'use strict'

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

const Flight = require('./models/flight');

async function seed() {
    await Flight.create({
        originCity: 'test from 1',
        destination: 'destination test 1',
        status: true,
        email: 'snur206@yahoo.com'
    });
    await Flight.create({
        originCity: 'test from 2',
        destination: 'destination test 2',
        status: true,
        email: 'snur206@yahoo.com'
    });
    await Flight.create({
        originCity: 'test from 3',
        destination: 'destination test 3',
        status: true,
        email: 'snur206@yahoo.com'
    });
    console.log('database is seeded.');
    mongoose.disconnect()
}
seed();