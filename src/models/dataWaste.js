const mongoose = require("mongoose");

const dataWasteSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.ObjectId,
    ref: "User",
    required: true,
  },
  no_hp: {
    type: String,
    required: true,
    maxLength: 12,
  },
  alamat: {
    type: String,
    required: true,
    maxLength: 100,
  },
  plastik: {
    type: Number,
  },
  makanan: {
    type: Number,
  },
  kertas: {
    type: Number,
  },
  karton: {
    type: Number,
  },
  kaleng: {
    type: Number,
  },
  kaca: {
    type: Number,
  },
  deskripsi: {
    type: String,
    required: true,
  },
});

const dataWaste = mongoose.model("DataWaste", dataWasteSchema);

module.exports = dataWaste;
