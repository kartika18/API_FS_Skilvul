const express = require("express");
const route = express.Router();

const user_route = require("./user_route");
const auth_route = require("./auth_route");
const dataWaste_route = require("./dataWaste_route");
const dataFeedback_route = require("./dataFeedback_route");

route.get("/", (req, res) => {
  res.status(200).json("Ini dari express mongoose");
});

route.use("/user", user_route);
route.use("/auth", auth_route);
route.use("/dataWaste", dataWaste_route);
route.use("/dataFeedback", dataFeedback_route);

module.exports = route;
