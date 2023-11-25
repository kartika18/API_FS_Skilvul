const dataFeedback = require("../models/dataFeedback");

module.exports = {
  createDataFeedback: async (req, res) => {
    let data = req.body;

    await dataFeedback.create(data);

    res.status(201).json({
      message: "Success create data feedback",
    });
  },

  getAllDataFeedback: async (req, res) => {
    const dataFeedbacks = await dataFeedback.find();

    res.status(200).json({
      message: "Success get all data feedback",
      data: dataFeedbacks,
    });
  },

  getDataFeedbackById: async (req, res) => {
    const { id } = req.params;

    const dataFeedbacks = await dataFeedback.find({ id: id });

    res.status(200).json({
      message: "Success get all data feedback by Id",
      data: dataFeedbacks,
    });
  },
};
