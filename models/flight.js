'use strict'

const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    orginCity: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    departure: {
        type: String,
        required: true
    },
    arrival: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    adults: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    email: {
        type: String
    }
    });

module.exports = mongoose.model('books', flightSchema);