
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cart1 = new mongoose.Schema({
  email: {
    type:String,
    required:true
       },
     source: {
        type:String,
        required:true
    },
    destination: {
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    }, 
    totalprice: {
        type:Number,
        required:true
    }, 
    payorderid: {
        type:String,
        default:"notpayed"
    },
    payementid: {
        type:String,
        default:"notpayed"
    },
    date: {
        type:Date,
        default:Date.now
    },
    status:{
        type:String
    },
    name:{
        type:String
    },
    noofpassengers:{
        type:Number
    },
});

module.exports=mongoose.model('order',cart1)