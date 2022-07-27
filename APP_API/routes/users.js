// APP_API Folder

var express = require('express');
var router = express.Router();

const ctrlUser = require('../controllers/user');


router.get('/users', ctrlUser.getUser);

const ctrlLogin = require('../controllers/login');


router.get('/login', ctrlLogin.getLogin);


module.exports = router;