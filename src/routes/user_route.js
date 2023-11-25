const express = require("express");
const {
  getUserDataWaste,
  getAllUser,
  createUser,
  getUserById,
} = require("../controllers/user_controller");
const route = express.Router();

route.get("/", createUser);
route.get("/:id", getUserById);
route.get("/:id/dataWaste", getUserDataWaste);
route.get("/", getAllUser);

module.exports = route;
