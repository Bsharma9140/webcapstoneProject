const mongoose = require('mongoose');
const Login = mongoose.model('Login');

const getLogin = function (req, res) {
    Login.find().exec(function (err, logindata){
        if(err) {
            res
            .status(404)
            .json(err);
        return;
        }
        res
        .status(200)
        .json(logindata);
    });
};



module.exports = {
    getLogin,
    
};

