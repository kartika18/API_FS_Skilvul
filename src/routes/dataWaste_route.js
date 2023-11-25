const express = require("express");
const {
  getAllDataWaste,
  createDataWaste,
  getDataWasteById,
} = require("../controllers/dataWaste_controller");
const route = express.Router();

route.get("/", getAllDataWaste);
route.post("/create", createDataWaste);
route.get("/:id", getDataWasteById);

module.exports = route;
