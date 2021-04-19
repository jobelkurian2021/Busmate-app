const mongoose = require('mongoose')

// var Loginschema = new mongoose.Schema({
    
const Schema = mongoose.Schema;
let login = new Schema({
    name:String,
    email:String,
    phone:String,
    password:String,
    state:String,
    city:String,
    type:String
});
module.exports = mongoose.model("user", login);
// mongoose.model("login", Loginschema) 
