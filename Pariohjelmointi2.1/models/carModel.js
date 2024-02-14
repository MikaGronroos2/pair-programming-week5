const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
  },
  price: {
    type: Number,
  },
});

module.exports = mongoose.model("Car", carSchema);
