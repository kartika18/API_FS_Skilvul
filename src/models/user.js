const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 14,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    minLength: 8,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
