
var mongoose = require('mongoose');

var hotelBookingSchema = new mongoose.Schema({

   no_of_rooms : {
    type:Number,
    required:true
   },

   start_date :{
    type:Date,
    required:true
   },

   end_date :{
    type:Date,
    required:true
   },

   price:{
    type:Number,
    required:true
   }

});

mongoose.model('HotelBooking', hotelBookingSchema, 'hotelBookings');