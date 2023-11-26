const express = require("express");
const {
  getUserDataWaste,
  getAllUser,
  getUserById,
} = require("../controllers/user_controller");
const verifyToken = require("../middleware/auth");
const route = express.Router();

route.get("/", verifyToken, getAllUser);
route.get("/:id", verifyToken, getUserById);
route.get("/:id/dataWaste", verifyToken, getUserDataWaste);

module.exports = route;
