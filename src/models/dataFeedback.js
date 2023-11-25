const mongoose = require("mongoose");

const dataFeedbackSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.ObjectId,
    ref: "User",
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  subjek: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 14,
  },
  no_hp: {
    type: Number,
    required: true,
    minLength: 10,
    maxLength: 12,
  },
  masukan: {
    type: String,
    required: true,
  },
});

const dataFeedback = mongoose.model("DataFeedback", dataFeedbackSchema);

module.exports = dataFeedback;
