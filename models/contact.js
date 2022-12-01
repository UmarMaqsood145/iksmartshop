const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  fullname: {
    type: String,
    maxlength: 20,
    trim: true,
  },
  country: {
    type: String,
    maxlength: 20,
    trim: true,
  },
  city: {
    type: String,
    maxlength: 50,
    trim: true,
  },
  address: {
    type: String,
    maxlength: 100,
    trim: true,
  },
  phone: {
    type: String,
    maxlength: 50,
    trim: true,
  },
  products: {
    type: Array,
    trim: true,
  },
  subTotal: {
    type: Number,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ikShop", ContactSchema);
