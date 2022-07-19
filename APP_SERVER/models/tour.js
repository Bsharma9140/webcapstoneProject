var mongoose = require('mongoose');

var tourSchema = new mongoose.Schema({
    destination: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    country: {
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

mongoose.model('Tour', tourSchema, 'tours');