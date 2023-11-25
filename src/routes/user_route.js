const express = require("express");
const {
  getUserDataWaste,
  getAllUser,
  getUserById,
} = require("../controllers/user_controller");
const route = express.Router();

route.get("/", getAllUser);
route.get("/:id", getUserById);
route.get("/:id/dataWaste", getUserDataWaste);

module.exports = route;
