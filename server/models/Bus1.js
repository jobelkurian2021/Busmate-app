// const slug = require("mongoose-slug-generator");
const mongoose = require("mongoose");
// mongoose.plugin(slug);

// const { ObjectId } = mongoose.Schema;

const busSchema = new mongoose.Schema(
  {
    name: {
      type: String
      // required: true,
    },
    type: {
      type: String,
      enum: ["AC", "Delux", "Normal", "Suspense AC", "Suspense Delux"]
    },
    busNumber: {
      type: String
      // required: true,
    },
    fare: {
      type: Number
      // required: true,
    },
    features: {
      type: []
    },
    description: {
      type: String
    },
    seatsAvailable: {
      type: Number,
      default: 30,
      maxlength: 32
    },
    bookedSeat: {
      type: []
    },
    soldSeat: {
      type: []
    },
    numberOfSeats: {
      type: Number,
      default: 30,
      maxlength: 32
    },
    departure_time: {
      type: String
    },
    isAvailable: {
      type: Boolean,
      default: false
    },
    travel: {
      type: String,
      // required: true,
      // type: ObjectId, ref: "Travel"
    },
    startLocation: { 
      type: String,
      // required: true,
      // type: ObjectId, ref: "Location" 
    },
    endLocation: { 
      type: String,
      // required: true,
      // type: ObjectId, ref: "Location" 
    },

    journeyDate: {
      type: String
    },
    boardingPoints: [
      {
        type: String,
        trim: true
      }
    ],
    droppingPoints: [
      {
        type: String,
        trim: true
      }
    ]
  },
  // { timestamps: true }
); 

module.exports = mongoose.model("motor", busSchema);
