
const mongoose = require('mongoose')

// var Loginschema = new mongoose.Schema({
    
const Schema = mongoose.Schema;
let cprofile = new Schema({
    name:String,
    email:String,
    site:String,
    address:String,
    phone:String,
    rid:String,
    acc:String,
    btype:String,
    busno:String
});
module.exports = mongoose.model("cprofile", cprofile);
// mongoose.model("login", Loginschema) 
