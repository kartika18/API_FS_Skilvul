const express = require("express");
const {
  getAllDataFeedback,
  createDataFeedback,
  getDataFeedbackById,
} = require("../controllers/dataFeedback_controller");
const route = express.Router();

route.get("/", getAllDataFeedback);
route.post("/create", createDataFeedback);
route.get("/:id", getDataFeedbackById);

module.exports = route;
