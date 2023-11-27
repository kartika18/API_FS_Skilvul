const dataWaste = require("../models/dataWaste");

module.exports = {
  createDataWaste: async (req, res) => {
    let data = req.body;

    await dataWaste.create(data);

    res.status(201).json({
      message: "Success Create Data Waste",
    });
  },

  getAllDataWaste: async (req, res) => {
    const dataWastes = await dataWaste.find();

    if (dataWastes.length === 0)
      return res.status(404).json({
        message: "Data Wastes Not Found",
      });

    res.status(200).json({
      message: "Success Get All Data Waste",
      data: dataWastes,
    });
  },

  getDataWasteById: async (req, res) => {
    const { id } = req.params;

    const dataWastes = await dataWaste.find({ user_id: id });

    if (dataWastes.length === 0)
      return res.status(404).json({
        message: "Data Waste Not Found",
      });

    res.status(200).json({
      message: "Success Get Data Waste by Id",
      data: dataWastes,
    });
  },
};
