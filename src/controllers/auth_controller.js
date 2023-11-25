const User = require("../models/user");

module.exports = {
  loginAuth: async (req, res) => {},

  registAuth: async (req, res) => {
    let data = req.body;

    await User.create(data);

    res.status(201).json({
      message: "Success create data user",
    });
  },
};
