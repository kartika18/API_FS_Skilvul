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
  },
  password: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => {
        return value.length >= 8;
      },
      message: "Password must be at least 8 characters long",
    },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
