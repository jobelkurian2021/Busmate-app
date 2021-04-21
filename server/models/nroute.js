const mongoose = require('mongoose')

// var Loginschema = new mongoose.Schema({
    
const Schema = mongoose.Schema;
let nroute = new Schema({
    source:String,
    destination:String,
    type:String,
    time:String,
    fare:String
});
module.exports = mongoose.model("route", nroute);
// mongoose.model("login", Loginschema) 
