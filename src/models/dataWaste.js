const mongoose = require("mongoose");

const dataWasteSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.ObjectId,
    ref: "User",
    required: true,
  },
  nama: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 100,
  },
  no_hp: {
    type: Number,
    required: true,
    minLength: 10,
    maxLength: 12,
  },
  alamat: {
    type: String,
    required: true,
    maxLength: 100,
  },
  plastik: {
    type: Number,
    required: true,
  },
  makanan: {
    type: Number,
    required: true,
  },
  kertas: {
    type: Number,
    required: true,
  },
  karton: {
    type: Number,
    required: true,
  },
  kaleng: {
    type: Number,
    required: true,
  },
  kaca: {
    type: Number,
    required: true,
  },
  deskripsi: {
    type: String,
    required: true,
  },
});

const dataWaste = mongoose.model("DataWaste", dataWasteSchema);

module.exports = dataWaste;
