const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const checkoutSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
   last_name: {
    type: String,
    required: true
  },
   address: {
    type: String,
    required: true
  },
  city:{
    type: String,
    required: true
  },
  province:{
    type: String,
    required: true
  },
  postcode:{
    type: String,
    required: true,
    min:6,
    max:6,
  },
 email: {
    type: String,
    required: true
  },
 phone:{
    type:String,
    required:true,

 },
 order_notes:{
    type:String,
    required:true,
 },
 total_rate:{
    type:Number,
    required:true,
 },
});

module.exports = Checkout = mongoose.model("checkout", checkoutSchema);