var mongoose = require('mongoose');


var loginSchema = new mongoose.Schema({
    
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

mongoose.model('Login', loginSchema, 'login');