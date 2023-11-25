const dataWaste = require("../models/dataWaste");

module.exports = {
  createDataWaste: async (req, res) => {
    let data = req.body;

    await dataWaste.create(data);

    res.status(201).json({
      message: "Success create data waste",
    });
  },

  getAllDataWaste: async (req, res) => {
    const dataWastes = await dataWaste.find();

    res.status(200).json({
      message: "Success get all data waste",
      data: dataWastes,
    });
  },

  getDataWasteById: async (req, res) => {
    const { id } = req.params;

    const dataWastes = await dataWaste.find({ id: id });

    res.status(200).json({
      message: "Success get all data waste by Id",
      data: dataWastes,
    });
  },
};
