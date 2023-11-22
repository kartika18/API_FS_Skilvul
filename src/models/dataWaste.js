const mongoose = require("mongoose");

const dataWasteSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.ObjectId,
    ref: "User",
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  plastik: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
