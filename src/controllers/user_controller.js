const User = require("../models/user");
const dataWaste = require("../models/dataWaste");

module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.find();

    if (!users)
      return res.status(404).json({
        message: "Users Not Found",
      });

    res.status(200).json({
      message: "Success get all data user",
      data: users,
    });
  },

  getUserById: async (req, res) => {
    const { id } = req.params;

    const user = await User.find({ _id: id });

    if (user.length === 0)
      return res.status(404).json({
        message: "User Not Found",
      });

    res.status(200).json({
      message: "Success Get User by Id",
      data: user,
    });
  },

  getUserDataWaste: async (req, res) => {
    const { id } = req.params;

    const dataWastes = await dataWaste.find({ user_id: id });

    if (dataWastes.length === 0)
      return res.status(404).json({
        message: "Data Waste by This Id Not Found",
      });

    res.status(200).json({
      message: "Success Get Data Waste by Id",
      data: dataWastes,
    });
  },
};
