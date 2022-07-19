var mongoose = require('mongoose');

var hotelSchema = new mongoose.Schema({
    hotelName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    fare: {
        type: Number,
        required: true
    }
});

mongoose.model('Hotel', hotelSchema, 'Hotels');