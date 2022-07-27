const mongoose = require('mongoose');
const User = mongoose.model('User');

const getUser = function (req, res) {
    User.find().exec(function (err, userdata){
        if(err) {
            res
            .status(404)
            .json(err);
        return;
        }
        res
        .status(200)
        .json(userdata);
    });
};



module.exports = {
    getUser,
    
};

