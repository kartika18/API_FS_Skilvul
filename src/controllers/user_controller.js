const User = require("../models/user");
const dataWaste = require("../models/dataWaste");

module.exports = {
  createUser: async (req, res) => {
    let data = req.body;

    await User.create(data);

    res.status(201).json({
      message: "Success create data user",
    });
  },

  getUserById: async (req, res) => {
    const { id } = req.params;

    const users = await User.find({ id: id });

    res.status(200).json({
      message: "Success get User by Id",
      data: users,
    });
  },

  getUserDataWaste: async (req, res) => {
    const { id } = req.params;

    const dataWastes = await dataWaste.find({ user_id: id });

    res.status(200).json({
      message: "Success get Todos by id",
      data: dataWastes,
    });
  },

  getAllUser: async (req, res) => {
    const users = await User.find();

    res.status(200).json({
      message: "Success get all data user",
      data: users,
    });
  },
};