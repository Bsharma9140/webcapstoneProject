const express = require("express");
const router = express.Router();

// Load User model
const Hotel = require("../../models/hotel");

// router.get('/', function(req, res, next) {

// 	// This isn't part of API and is just used from a browser or curl to test that
// 	// "/pop" is being routed correctly.

// 	var testObject = {
// 		"AppName": "MongoPop",
// 		"Version": 1.0
// 	}
// 	res.json(testObject);
// });

router.get("/hotels",(req,res)=>{
  Hotel.find(function(err, data) {
    if (err) {
        console.log(err);
    } else {
      console.log(data);
        res.json(data);
    }
});

 });


module.exports = router;