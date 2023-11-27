const dataFeedback = require("../models/dataFeedback");

module.exports = {
  createDataFeedback: async (req, res) => {
    let data = req.body;

    await dataFeedback.create(data);

    res.status(201).json({
      message: "Success Create Data Feedback",
    });
  },

  getAllDataFeedback: async (req, res) => {
    const dataFeedbacks = await dataFeedback.find();

    if (dataFeedbacks.length === 0)
      return res.status(404).json({
        message: "Data Feedbacks Not Found",
      });

    res.status(200).json({
      message: "Success Get All Data Feedback",
      data: dataFeedbacks,
    });
  },

  getDataFeedbackById: async (req, res) => {
    const { id } = req.params;

    const dataFeedbacks = await dataFeedback.find({ user_id: id });

    if (dataFeedbacks.length === 0)
      return res.status(404).json({
        message: "Data Feedback Not Found",
      });

    res.status(200).json({
      message: "Success Get All Data Feedback by Id",
      data: dataFeedbacks,
    });
  },
};
