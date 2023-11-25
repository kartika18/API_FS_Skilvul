const express = require("express");
const { loginAuth, registAuth } = require("../controllers/auth_controller");
const route = express.Router();

route.post("/login", loginAuth);
route.post("/regist", registAuth);

module.exports = route;
