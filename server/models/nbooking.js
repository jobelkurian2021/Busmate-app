
const mongoose = require('mongoose')
    
const Schema = mongoose.Schema;
let nbooking = new Schema({
    email:String,
    phone:String,
    source:String,
    destination:String,
    date:String,
    time:String,
    no:String,
    accomodation:String,
    seatno:String,
    name:String,
    sex:String,
    age:String
});
module.exports = mongoose.model("booking", nbooking);
