var mongoose = require('mongoose');
var tourBookingSchema = new mongoose.Schema({

    start_date :{
    type:Date,
    required:true
   },

   end_date :{
    type:Date,
    required:true
   },

   no_of_persons : {
    type:Number,
    required:true
   },

   price:{
    type:Number,
    required:true
   },
   
});

mongoose.model('TourBooking', tourBookingSchema, 'tourBookings');