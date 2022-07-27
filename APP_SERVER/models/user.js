var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        min: 10,
        max: 10
    },
    city: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    country: {
        type: Number,
        required: true
    },
    postalCode: {
        type: Number,
        required: true
    },
});

mongoose.model('User', userSchema, 'users');